// Optimistic overlay: merge local pending writes over the CSV-derived model so changes show
// instantly and survive the ~5-min published-CSV lag, then drop out once the CSV catches up.

import type { Details, JoinedApp } from '../types';

export interface Override {
  status?: string;
  priority?: string;
  quality?: string;
  myNotes?: string;
  minYoe?: string;
  dateApplied?: string;
  lastUpdate?: string;
}
export type Overrides = Record<string, Override>;

export function emptyDetails(id: string): Details {
  return { id, minYoe: '', dateApplied: '', lastUpdate: '', myNotes: '' };
}

function applyOverlay(app: JoinedApp, overrides: Overrides): JoinedApp {
  const ov = overrides[app.id];
  if (!ov) return app;
  const next = { ...app };
  if (ov.status !== undefined) next.status = ov.status;
  if (ov.priority !== undefined) next.priority = ov.priority;
  if (ov.quality !== undefined) next.quality = ov.quality;
  if (ov.dateApplied !== undefined || ov.lastUpdate !== undefined || ov.myNotes !== undefined || ov.minYoe !== undefined) {
    next.details = {
      ...(next.details ?? emptyDetails(app.id)),
      ...(ov.dateApplied !== undefined ? { dateApplied: ov.dateApplied } : {}),
      ...(ov.lastUpdate !== undefined ? { lastUpdate: ov.lastUpdate } : {}),
      ...(ov.myNotes !== undefined ? { myNotes: ov.myNotes } : {}),
      ...(ov.minYoe !== undefined ? { minYoe: ov.minYoe } : {}),
    };
  }
  return next;
}

export function reconcile(
  csv: JoinedApp[],
  pendingAdds: JoinedApp[],
  overrides: Overrides,
  pendingDeletes: string[] = [],
): JoinedApp[] {
  const gone = pendingDeletes.length ? new Set(pendingDeletes) : null;
  const ids = new Set(csv.map((a) => a.id));
  const merged = csv.filter((a) => !gone || !gone.has(a.id)).map((a) => applyOverlay(a, overrides));
  const adds = pendingAdds
    .filter((a) => !ids.has(a.id))
    .filter((a) => !gone || !gone.has(a.id))
    .map((a) => applyOverlay(a, overrides));
  return [...adds, ...merged]; // newest adds on top; sort still applies downstream
}
