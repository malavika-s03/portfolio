# SCHEMA — job-tracker field registry

The **single source of truth** for the sheet's structure. To add or change a field, edit the
relevant table here; the workflows populate every field listed, formatting it by its Type.

- **Live sheet:** "Tracker" — id `1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns`
- **Three tabs**, linked by the application `id`.
- Rules, enums and the ID logic live in [`CONVENTIONS.md`](./CONVENTIONS.md); API recipes in
  [`ACCESS.md`](./ACCESS.md). Dropdowns/formats are (re)applied by [`reformat.mjs`](./reformat.mjs).

## Tab: `Applications` (gid 0) — lean human capture surface

Human types Company / Status / Priority / Link by hand. `id` + `Date Added` auto-fill (onEdit script or Claude).
Column **order is flexible** — the tooling and dashboard map by header **name**, not position (so the auto
fields sit at the end, out of the way). The letters below reflect the current live order.

| Col | Field | Type | Set by | Notes |
|---|---|---|---|---|
| A | `Company` | text | human | **required** (key column) |
| B | `Status` | enum: Status | human | dropdown (strict) |
| C | `Priority` | enum: Priority | human | dropdown (strict) |
| D | `Link` | url | human | the job post |
| E | `Date Added` | date | auto | onEdit script / Claude, `yyyy-mm-dd` |
| F | `id` | id `app_NNN` | auto | the key linking to Details/Contacts |
| G | `Added by` | text | auto | editor's email prefix (onEdit script); Claude writes `claude` |

## Tab: `Details` (1:1, key = `id`) — Claude enrichment + long text (may be blank)

| Field | Type | Notes |
|---|---|---|
| `id` | id (FK) | matches `Applications.id` |
| `Platform` | enum: Platform | dropdown (suggest) |
| `Location` | text | city / "Remote" |
| `Work Mode` | enum: WorkMode | dropdown (strict) |
| `Min YOE` | enum: MinYOE | minimum years of experience required; dropdown (strict): `0` `1` `2` `3` `3+` |
| `Glassdoor` | number | company rating, `0.0` |
| `Salary` | text | if listed |
| `Date Applied` | date | blank while just "Saved" |
| `Last Update` | date | stamped on any change (onEdit, Web App, or Claude) |
| `Follow-up By` | date | manual reminder date — no longer drives a dashboard signal |
| `Next Step` | text | "send follow-up", "prep onsite" |
| `Job Description` | longtext | **compact summary, ≤ 50 words** (keep the CSV lean — rephrase, don't paste the full post) |
| `Requirements` | longtext | |
| `Research Notes` | longtext | on-demand research |
| `My Notes` | longtext | freeform |

## Tab: `Contacts` (1:many, key = `app_id`) — **legacy**

> The dashboard no longer shows or edits contacts (contact info now goes in `Details.My Notes`).
> The tab + data remain and the API recipe still works, but this is no longer an active surface.

| Field | Type | Notes |
|---|---|---|
| `contact_id` | id `c_NNN` | per-row id |
| `app_id` | id (FK) | which application |
| `Name` | text | |
| `Their Role` | enum: TheirRole | dropdown (suggest) |
| `Email` | text | the mail you'd approach |
| `LinkedIn` | url | |
| `Approached` | enum: Approached | dropdown (strict) |
| `Last Contacted` | date | |
| `Notes` | text | |

## Changing the schema

- **Add a field** → add a row to the relevant table above (and, if it's an enum, define the list in
  `CONVENTIONS.md`). Add the column on the live sheet via the `ACCESS.md` structure recipe, then run
  `reformat.mjs` to apply its dropdown/format (add it to `reformat.mjs`'s `SPEC` if needed).
- Columns can be added or removed later as needed — nothing here is frozen.
