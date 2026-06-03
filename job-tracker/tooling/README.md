# job-tracker tooling — START HERE (for any agent)

You maintain the **job-tracker Google Sheet** (the single source of truth). Three things write to it:

- **Humans** hand-edit the `Applications` tab (Company / Status / Priority / Link).
- **The dashboard** (`/tracker` on the portfolio) reads it (published CSV) **and** does small,
  non-destructive writes (add a listing · change status/priority · edit notes) via an Apps Script
  **Web App**.
- **You (Claude)** do the bulk via the **Sheets API** from this folder (service account).

This doc maps the system; details live in the linked files — don't duplicate them.
Product/architecture context: [`../README.md`](../README.md), [`../docs/`](../docs/).

## Setup (fresh machine / session)

1. **Credentials:** create `.env` in this folder containing the real Google **service-account JSON
   key** (the tooling reads the file as JSON). `.env` is gitignored — never commit it. (The service
   account must be shared as an Editor on the sheet; the Google Sheets API must be enabled in its project.)
2. **Install deps:** `cd job-tracker/tooling && npm install` (isolated `googleapis`; never enters the
   portfolio build).
3. **Verify access:** `node verify.mjs` (reversible read/write check). Then operate via the recipes below.
4. The **dashboard** (`/tracker`) needs nothing local — it reads the public CSV and writes via the
   deployed Apps Script Web App.

## Key facts

- **Live sheet:** "Tracker", id `1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns` — 3 tabs
  (`Applications`, `Details`, `Contacts`) linked by the application `id`.
- **Read live via the Sheets API** for any decision — the published CSV lags 1–5 min.
- **Auth:** service-account key in `.env` (Editor on the sheet). Never print/commit it.
- **Two bound Apps Scripts** live on the sheet (canonical copies in [`apps-script/`](./apps-script/)):
  - **`Code.gs` — `onEdit`:** on a human-typed `Applications` row, auto-fills `id`, `Date Added`,
    `Added by` (editor's email prefix), `Priority` (default `Medium`), and stamps the matching
    `Details.Last Update` on edits. Located by header **name**. Does **not** fire on API/Web-App writes.
  - **`Api.gs` — `doPost` Web App:** the dashboard's write endpoint (`add` / `setStatus` /
    `setPriority` / `setNotes` / `addContact`). Runs **as the owner**. ⚠️ **editing it requires a
    re-deploy** (Manage deployments → new version); `onEdit` is live, `doPost` is not.
- **API and Web-App writes don't fire `onEdit`**, so those paths set `id` / dates / `Added by` /
  `Priority` themselves (same rules).

## The map

| File | Purpose |
|---|---|
| [`SCHEMA.md`](./SCHEMA.md) | tabs, fields, enums — the data contract. **Edit to change the schema.** |
| [`CONVENTIONS.md`](./CONVENTIONS.md) | the rules: `id` logic (`app_NNN`), the Status enum + meanings, **needs-attention**, "row is real", dates, safe-write. |
| [`ACCESS.md`](./ACCESS.md) | the **how** for your service-account path — auth + copy-paste API recipes + gotchas. |
| [`reformat.mjs`](./reformat.mjs) | re-applies dropdowns + date/number formats **by header name**; non-destructive, safe on live data. Run after reordering columns or changing an enum. |
| [`verify.mjs`](./verify.mjs) | `node verify.mjs` — reversible read/write connectivity check. |
| `apps-script/Code.gs` | bound `onEdit` auto-stamp (canonical). Install: Extensions → Apps Script → paste → Save. |
| `apps-script/Api.gs` | bound `doPost` Web App = the dashboard's write endpoint (canonical). Install: paste → **Deploy as Web app**; re-deploy a new version on any edit. |
| `.env` | service-account JSON key (gitignored). |

The **dashboard frontend** lives in the portfolio repo at `src/pages/Tracker/` (read-only render +
the write client that calls `Api.gs`). See [`../docs/03-dashboard.md`](../docs/03-dashboard.md) and
[`../docs/04-write-from-ui.md`](../docs/04-write-from-ui.md).

## Workflows (your service-account path)

Every write: **read live → reason → write via an `ACCESS.md` recipe, obeying `CONVENTIONS.md`.**
Set `id` / `Date Added` / `Added by` (`claude`) / `Priority` yourself (the scripts don't fire for you).

- **Add a job** — complete a human bare row (same Company, `id` blank) or append; assign `id`, stamp dates.
- **Enrich** — **upsert the `Details` row by `id`** (MERGE; never blank a field you didn't set).
- **Update status / notes / dates** — patch `Applications` (Status/Priority) or upsert `Details`
  (`My Notes`, `Date Applied`, `Next Step`, …); always stamp `Last Update`.
- **Change the schema** — edit `SCHEMA.md`, add the column via an `ACCESS.md` structure recipe on the
  live sheet, then run `reformat.mjs` (add the new column to its `SPEC` if it needs a dropdown/format).
- **Change an enum** (e.g. Status values) — update `CONVENTIONS.md` + `SCHEMA.md` + the `ENUM` in
  `reformat.mjs`, run `reformat.mjs` to refresh the live dropdown, and re-map any rows still holding
  an old value. Also update the dashboard's `config.ts` `STATUS` + `tracker.css`.
- **Contacts — legacy.** The `Contacts` tab/data still exist, but the dashboard no longer shows or
  edits contacts (contact info goes in `Details.My Notes` now). The append recipe in `ACCESS.md`
  still works if needed.
- **Back up** — deferred (no backup sheet yet).

## Hard rules (full list in CONVENTIONS)

Dropdowns/validation bounded to data rows; **no checkbox columns**. A **row is real iff its key
column is set**. **Map columns by header name, never position.** Don't duplicate the `onEdit`
script's logic. Don't put credentials or write scripts anywhere but this folder.
