# ACCESS — operating the sheet via the API (the HOW)

Copy-paste recipes for **your (Claude's) service-account** reads/writes. Pairs with `SCHEMA.md`
(fields/enums) and `CONVENTIONS.md` (rules: id logic, status enum, needs-attention, safe-write).
Start at `README.md`.

> The **dashboard's** writes don't use these — they POST to the Apps Script Web App
> (`apps-script/Api.gs`). This file is the local service-account path.

## Setup

- Tooling is isolated: its own `package.json` / `node_modules` (`googleapis`); never imported by
  the portfolio build. Removing the tracker = delete this folder + the dashboard route.
- `.env` is a **service-account JSON key** (gitignored). Load into a variable; **never log it**.
- Live sheet id: `1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns`. The service account is an Editor.
- If a call ever 403s, the sheet isn't shared with the service account; if it complains the API is
  off, enable the Google Sheets API in the Cloud project (the error carries a direct link).

```js
import { readFileSync } from 'node:fs';
import { google } from 'googleapis';
const credentials = JSON.parse(readFileSync(new URL('./.env', import.meta.url), 'utf8')); // never log
const auth = new google.auth.GoogleAuth({ credentials, scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
const sheets = google.sheets({ version: 'v4', auth });
const SHEET_ID = '1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns';
const today = () => new Date().toISOString().slice(0, 10); // yyyy-mm-dd
```

## Read endpoints

| Use | How | Notes |
|---|---|---|
| **Decisions / writes (you)** | Sheets API `values.get` (live) | always fresh — use this to find rows & compute ids |
| **Dashboard (live)** | publish-to-web `…/pub?gid=<gid>&single=true&output=csv` | keyless, ~1–5 min cache |

⚠️ Use **publish-to-web `/pub`**, not `/export?format=csv` — the live sheet is restricted, and
`/export` needs a link-public sheet. `/pub` is keyless regardless of sharing.

## Operations (recipes)

All writes use `USER_ENTERED` (dates `yyyy-mm-dd`, numbers as numbers). Dropdowns/formats are
pre-applied to rows 2–1000 (re-apply with `reformat.mjs`), so appends need no per-row formatting.

**Read a tab + helpers**
```js
const get = async (tab) => (await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: tab })).data.values || [];
const rows = await get('Applications');                 // rows[0] = header
const col = (header, name) => header.indexOf(name);
const findRow = (data, c, val) => data.findIndex((r) => r[c] === val); // 0-based in data; sheet row = +2
const keep = (next, prev) => (next == null || next === '') ? (prev ?? '') : next; // merge: '' = keep existing cell
```

**Next id** (`app_NNN` / `c_NNN` — rule in CONVENTIONS: max+1, never reused)
```js
const nextId = (rows, c, prefix) => {
  let max = 0;
  rows.slice(1).forEach((r) => { const m = String(r[c] || '').match(new RegExp(`^${prefix}_(\\d+)$`)); if (m) max = Math.max(max, +m[1]); });
  return `${prefix}_` + String(max + 1).padStart(3, '0');
};
```

**Add a job** — build the row **by header name** (`build` below), so column order doesn't matter.
If a human already started a row **for this same company** (Company set, `id` blank), complete it
in place; else append. `keep` merges — a blank value never wipes a cell the human typed. Bare-row
matching requires a `company` (no company → always append, never claim a stranger's row).
```js
const H = rows[0], idC = col(H, 'id'), coC = col(H, 'Company'), data = rows.slice(1);
const bare = company ? data.findIndex((r) => (r[coC] || '').trim().toLowerCase() === company.toLowerCase() && !(r[idC] || '').trim()) : -1;
const id = nextId(rows, idC, 'app');
const want = { id, 'Date Added': today(), 'Added by': 'claude', Company: company, Status: status, Link: link, Priority: priority || 'Medium' };
const build = (cur = []) => H.map((h, i) => keep(want[h], cur[i]));
if (bare >= 0) await sheets.spreadsheets.values.update({ spreadsheetId: SHEET_ID, range: `Applications!A${bare + 2}`, valueInputOption: 'USER_ENTERED', requestBody: { values: [build(data[bare])] } });
else           await sheets.spreadsheets.values.append({ spreadsheetId: SHEET_ID, range: 'Applications!A1', valueInputOption: 'USER_ENTERED', insertDataOption: 'INSERT_ROWS', requestBody: { values: [build()] } });
```

**Patch a row by id** (e.g. status) — find the row, update just that cell. Compute the column
**from the header by name** (never hardcode a letter — columns get reordered).
```js
const H = rows[0], data = rows.slice(1), i = findRow(data, col(H, 'id'), id);
if (i < 0) throw new Error(`id ${id} not found`);
const A1 = (n) => String.fromCharCode(65 + n);                 // 0->A (fine for the first 26 cols)
const c = col(H, 'Status');                                    // wherever Status currently sits
await sheets.spreadsheets.values.update({
  spreadsheetId: SHEET_ID, range: `Applications!${A1(c)}${i + 2}`,
  valueInputOption: 'USER_ENTERED', requestBody: { values: [[newStatus]] },
});
```
> Setting Status to `Applied`? Also stamp `Date Applied` = `today()` on the Details row (upsert), per CONVENTIONS.

**Upsert the 1:1 `Details` row by id** — **MERGE; never blank a field you didn't supply**
(`fields` keyed by header name). Reads the existing row and keeps any cell you don't set.
```js
const det = await get('Details'), dHead = det[0], di = det.slice(1).findIndex((r) => (r[0] || '') === id);
const cur = di >= 0 ? det[di + 1] : [];
const set = { ...fields, id, 'Last Update': today() };                  // always stamp Last Update (CONVENTIONS)
const rowVals = dHead.map((h, i) => keep(set[h], cur[i]));              // prefer new; '' never wipes existing
if (di < 0) await sheets.spreadsheets.values.append({ spreadsheetId: SHEET_ID, range: 'Details!A1', valueInputOption: 'USER_ENTERED', insertDataOption: 'INSERT_ROWS', requestBody: { values: [rowVals] } });
else        await sheets.spreadsheets.values.update({ spreadsheetId: SHEET_ID, range: `Details!A${di + 2}`, valueInputOption: 'USER_ENTERED', requestBody: { values: [rowVals] } });
```

**Append a `Contact`** (1:many) — *legacy; the dashboard no longer shows contacts (use `Details.My
Notes`). Recipe kept in case you ever need it.*
```js
const c = await get('Contacts'), cid = nextId(c, 0, 'c');
await sheets.spreadsheets.values.append({
  spreadsheetId: SHEET_ID, range: 'Contacts!A1', valueInputOption: 'USER_ENTERED', insertDataOption: 'INSERT_ROWS',
  requestBody: { values: [[cid, appId, name, theirRole, email, linkedin, approached, lastContacted, notes]] },
});
```

**Join (full view / dashboard parity)** — index `Details` by `id`, group `Contacts` by `app_id`,
attach to each Application. Join by `id`, never row position (so human re-sorting can't break it).
Long text round-trips through CSV intact, but parse with a real RFC-4180 parser, not `split(',')`.

**Structure changes** — add a column / tab via `batchUpdate` (`insertDimension` / `addSheet`), update
`SCHEMA.md`, then run `reformat.mjs` to (re)apply dropdowns/formats by header name.

## Gotchas (hard-won — don't relearn)

1. **Bound validation/dropdowns to data rows**, never a whole column. **No checkbox/BOOLEAN
   columns** — empty booleans render `FALSE`, which bloats the CSV and makes `append` anchor below
   the filler. (Number *formats* are safe unbounded.)
2. **A row is real iff its key column is non-empty** — `Applications`→Company/id, `Details`→id,
   `Contacts`→app_id. Never judge "blank" by all-cells-empty.
3. **The bound `onEdit` script** auto-fills `id`/`Date Added`/`Added by`/`Priority`(=Medium) and
   stamps `Details.Last Update` on **human UI edits only** (not API or Web-App writes) — so set
   those yourself on API writes (same rules). See `apps-script/Code.gs`. (The dashboard's writes go
   through `apps-script/Api.gs`, a separate Web App.)
4. **Published CSV lags writes 1–5 min** — read the API for fresh state when making decisions.
5. **Upserts MERGE** — keep existing cells; writing a partial row blindly blanks the rest (see the
   Details recipe). Same for completing an Applications bare row.
6. **`nextId` is read-then-write (not atomic)** — fine at personal scale (collisions ~nil, self-heal
   on the next max+1 read); don't fire concurrent bulk adds.
