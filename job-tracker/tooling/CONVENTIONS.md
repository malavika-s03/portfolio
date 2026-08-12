# CONVENTIONS — rules every session follows

Read before writing to the sheet. Pairs with [`SCHEMA.md`](./SCHEMA.md) (fields) and
[`ACCESS.md`](./ACCESS.md) (API recipes).

## Identity (the ID rule)

- **Application `id`:** `app_` + a number, zero-padded to 3 and growing naturally
  (`app_001` … `app_999` … `app_1000`).
  **Next id = (highest existing number in `Applications.id`) + 1.** Never reuse a deleted id —
  always `max + 1`, even if there are gaps. Empty sheet → `app_001`.
  (Gaps are now common — `delete` removes rows but never frees their ids for reuse.)
- **Contact `contact_id`:** `c_` + number, same rule, scoped to the `Contacts` tab.
- Humans add rows **without** an id. Claude assigns it on pickup, then writes any linked
  `Details` / `Contacts` rows using that same id as the foreign key.

## Row reality

A row is **real** iff its key column is non-empty:
`Applications` → `Company` (or `id`) · `Details` → `id` · `Contacts` → `app_id`.
The dashboard filters on this. Never treat a row as blank by "all cells empty."

## Writing safely (lessons from the capability spike)

- Apply dropdowns and number formats to a **bounded row range** (currently rows **2–1000**),
  never an unbounded column.
- **No checkbox / BOOLEAN columns exist by design** — empty booleans render `FALSE` and bloat the
  CSV + break `append` anchoring. If one is ever added, bound it tightly and apply per data row.
- Dropdowns are **pre-applied across the bounded range** so humans get the picker on hand-entry;
  empty dropdown cells stay blank in CSV (no bloat). When data nears row 1000, extend the range.
- Write with `valueInputOption: USER_ENTERED`: dates as `yyyy-mm-dd`, numbers as numbers.

## Dates

- `Date Added`: **auto-stamped** — by the bound `onEdit` Apps Script when a human hand-enters a
  row, or by Claude on API writes (`yyyy-mm-dd`). See *Sheet-bound script* below.
- `Last Update`: stamped on any change — Claude on its API writes; the onEdit script on manual edits
  (an Applications row edit stamps that app's Details row by id; a Details row edit stamps its own).
- `Priority`: defaults to **Medium** on a new row (onEdit script on hand-entry; Claude on API adds) if left blank.
- `Quality`: defaults to **Medium** on a new row (onEdit script on hand-entry; Claude on API adds) if left blank.
- `Date Applied`: blank until applied; set to today when `Status` becomes `Applied`.

## Sheet-bound Apps Scripts

Two scripts live on the sheet (canonical copies in [`apps-script/`](./apps-script/)):

- **`Code.gs` — `onEdit`:** on a **manual UI edit** to a new `Applications` row with content but no
  id, it fills `id` (`app_NNN`), `Date Added`, `Priority` (default `Medium`), and stamps the matching
  `Details.Last Update` on edits. Columns located by name.
- **`Api.gs` — `doPost` Web App:** the dashboard's write endpoint (`add`/`setStatus`/`setPriority`/
  `setNotes`/`setMinYoe`), running as the owner. ⚠️ editing it needs a **re-deploy** (new version); `onEdit` is live.

Neither fires on **Sheets-API** writes, so **Claude sets `id`/`Date Added`/`Priority`
itself** on API writes (same rules). Don't duplicate the `onEdit` logic; extend the scripts and keep
the repo copies in sync (simple-trigger limits: <30s, no auth-required services).

## Enums

| Name | Mode | Values |
|---|---|---|
| Status | strict | Saved · Applied · Reached out · Responded · Accepted · Rejected · No response |
| Priority | strict | High · Medium · Low |
| Quality | strict | High · Medium · Low |
| MinYOE | strict | 0 · 1 · 2 · 3 · 3+ |

*(suggest = dropdown shown but new values allowed; strict = only listed values.)*

**Status meaning:** `Saved` = added, not applied · `Applied` = applied to the link · `Reached out` =
contacted someone · `Responded` = they replied (decide next move) · `Accepted` = offer/accepted (closed) ·
`Rejected` / `No response` = closed. **Needs attention** = High/Medium priority (never Low) in an active
status (Saved/Applied/Reached out/Responded) idle > 1 day; clocks: Saved→Date Added, Applied→Date Applied,
Reached out & Responded→Last Update.

## Reads for decisions

When deciding writes (finding a row, computing the next id, spotting half-entered rows), read
**LIVE via the API** (service account) — not the published CSV, which lags 1–5 minutes.

## Ownership

Humans hand-edit `Applications` (Company / Status / Link / Priority). Claude owns `Details`
and all enrichment fields (Min YOE, dates, My Notes). The `Owner`, `Contacts` tab, and `Added by`
fields were intentionally dropped to keep the system lean.
