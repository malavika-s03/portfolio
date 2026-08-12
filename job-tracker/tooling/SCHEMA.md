# SCHEMA — job-tracker field registry

The **single source of truth** for the sheet's structure. To add or change a field, edit the
relevant table here; the workflows populate every field listed, formatting it by its Type.

- **Live sheet:** "Tracker" — id `1a3OmKadnsA9ZImqJoP47-LzCSnQRgl71CVzRcDpGYns`
- **Two tabs**, linked by the application `id`.
- Rules, enums and the ID logic live in [`CONVENTIONS.md`](./CONVENTIONS.md); API recipes in
  [`ACCESS.md`](./ACCESS.md). Dropdowns/formats are (re)applied by [`reformat.mjs`](./reformat.mjs).

## Tab: `Applications` (gid 0) — lean human capture surface

Human types Company / Status / Priority / Quality / Link by hand. `id` + `Date Added` auto-fill (onEdit script or Claude).
Column **order is flexible** — the tooling and dashboard map by header **name**, not position (so the auto
fields sit at the end, out of the way). The letters below reflect the current live order.

| Col | Field | Type | Set by | Notes |
|---|---|---|---|---|
| A | `Company` | text | human | **required** (key column) |
| B | `Status` | enum: Status | human | dropdown (strict) |
| C | `Priority` | enum: Priority | human | dropdown (strict) |
| D | `Quality` | enum: Quality | human | dropdown (strict) |
| E | `Link` | url | human | the job post |
| F | `Date Added` | date | auto | onEdit script / Claude, `yyyy-mm-dd` |
| G | `id` | id `app_NNN` | auto | the key linking to Details |

## Tab: `Details` (1:1, key = `id`) — Claude enrichment + notes (may be blank)

| Field | Type | Notes |
|---|---|---|
| `id` | id (FK) | matches `Applications.id` |
| `Min YOE` | enum: MinYOE | minimum years of experience required; dropdown (strict): `0` `1` `2` `3` `3+` |
| `Date Applied` | date | blank while just "Saved" |
| `Last Update` | date | stamped on any change (onEdit, Web App, or Claude) |
| `My Notes` | longtext | freeform — contact info, next steps, anything |

## Changing the schema

- **Add a field** → add a row to the relevant table above (and, if it's an enum, define the list in
  `CONVENTIONS.md`). Add the column on the live sheet via the `ACCESS.md` structure recipe, then run
  `reformat.mjs` to apply its dropdown/format (add it to `reformat.mjs`'s `SPEC` if needed).
- Columns can be added or removed later as needed — nothing here is frozen.
