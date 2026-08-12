# 04 — Writing from the dashboard

Adds minimal, **non-destructive** write actions to the `/tracker` UI: add a listing, change a
listing's status & priority, and edit its notes. No deletes among the edits; the one destructive action is `delete` (see the table below). Everything else is read-only.

## Write path (no service-account key in the browser)

A `doPost` Web App on the **bound Apps Script** (`tooling/apps-script/Api.gs`), deployed to run **as
the owner**, so it has edit rights. The dashboard POSTs JSON (`text/plain`, to dodge CORS preflight);
the script writes the sheet and returns the affected row as JSON. Reads stay on the published CSV.

> Auth is intentionally out of scope (two trusted users). `Api.gs` has an optional `API_TOKEN`
> (off by default). The Web App `/exec` URL lives in `config.ts` (`WEB_APP_URL`); if blank, the
> write controls hide and the UI is read-only.

**Re-deploy reminder:** editing `Api.gs` requires redeploying the Web App (Manage deployments →
edit → New version). `onEdit` in `Code.gs` is live; `doPost` is not.

## Actions (6 — five append/edit, one delete)

| Action | Writes | Returns |
|---|---|---|
| `add` | Applications row (id/Date Added/Priority auto) + a Details row (My Notes, Last Update, Date Applied if Applied) | the new app |
| `setStatus` | Applications.Status; stamps Details.Last Update (+ Date Applied on →Applied) | `{id,status,lastUpdate,dateApplied?}` |
| `setPriority` | Applications.Priority | `{id,priority}` |
| `setQuality` | Applications.Quality | `{id,quality}` |
| `setNotes` | Details.My Notes; stamps Last Update | `{id,myNotes,lastUpdate}` |
| `delete` | Applications row **and** its Details row, by id (hard delete; row removal, not cell-clear) | `{id}` |

Web-App writes don't fire `onEdit`, so `doPost` sets id/dates/etc. itself (same rules as Claude).

> `delete` is the **lone destructive action** — every other action is append/edit. It removes the
> application's rows from both tabs. Deleted ids are never reused (`max+1` still holds; see
> CONVENTIONS.md). Re-deploy the Web App after editing `Api.gs` or `delete` is unknown to the live
> endpoint.

## UI surfaces (2)

- **FAB (＋)** → **Add sheet** (reuses the slide-over): Company, Link, Status, Priority, Quality, Notes, Min YOE.
- **Detail sheet:** Status, Priority & Quality become inline selects; **Notes** is an editable textarea
  (saves on blur). Everything else is read-only.

## Optimistic + reconcile (so the ~5-min CSV lag is invisible)

`useMutations` holds an overlay — `pendingAdds` + `overrides{id → status/priority/quality/myNotes/dates}`.
`reconcile()` merges it over the CSV model: edits show instantly; new apps appear immediately and
overrides drop out once the CSV reflects them (`prune` on each refetch). Write failure → roll back
+ inline error/toast.

## Isolation
All new frontend lives in `src/pages/Tracker/`. `doPost` lives in the sheet's script, not the repo
build. Removal unchanged: delete the folder + the lazy line + the route. Non-destructive — no
delete action exists anywhere.

## Files
```
job-tracker/tooling/apps-script/Api.gs   doPost + add / setStatus / setPriority / setQuality / setNotes / setMinYoe / delete
src/pages/Tracker/
  config.ts            WEB_APP_URL, WRITES_ENABLED, ADDED_BY_OPTIONS, PRIORITY_OPTIONS
  lib/writeApi.ts      POST client (text/plain) + the 4 action fns
  lib/overlay.ts       reconcile() + applyOverlay() + emptyDetails()
  hooks/useMutations.ts  overlay state + optimistic mutators + prune
  hooks/useTracker.ts   wires mutations + reconcile (before decorate)
  components/Fab.tsx · AddSheet.tsx · DetailPanel.tsx (inline selects + notes editor)
```
