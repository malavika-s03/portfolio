// Optimistic overlay: merge local pending writes over the CSV-derived model so changes show
// instantly and survive the ~5-min published-CSV lag, then drop out once the CSV catches up.

import type { Contact, Details, JoinedApp } from '../types';

export interface Override {
  status?: string;
  priority?: string;
  dateApplied?: string;
  lastUpdate?: string;
}
export type Overrides = Record<string, Override>;
export type PendingContacts = Record<string, Contact[]>;

export function emptyDetails(id: string): Details {
  return {
    id, platform: '', location: '', workMode: '', glassdoor: '', salary: '', tags: '',
    dateApplied: '', lastUpdate: '', followUpBy: '', nextStep: '', jobDescription: '',
    requirements: '', researchNotes: '', myNotes: '',
  };
}

function applyOverlay(app: JoinedApp, overrides: Overrides, pendingContacts: PendingContacts): JoinedApp {
  let next = app;
  const ov = overrides[app.id];
  if (ov) {
    next = { ...next };
    if (ov.status !== undefined) next.status = ov.status;
    if (ov.priority !== undefined) next.priority = ov.priority;
    if (ov.dateApplied !== undefined || ov.lastUpdate !== undefined) {
      next.details = {
        ...(next.details ?? emptyDetails(app.id)),
        ...(ov.dateApplied !== undefined ? { dateApplied: ov.dateApplied } : {}),
        ...(ov.lastUpdate !== undefined ? { lastUpdate: ov.lastUpdate } : {}),
      };
    }
  }
  const pc = pendingContacts[app.id];
  if (pc && pc.length) {
    const have = new Set(next.contacts.map((c) => c.contactId));
    const extra = pc.filter((c) => !have.has(c.contactId));
    if (extra.length) next = { ...next, contacts: [...next.contacts, ...extra] };
  }
  return next;
}

export function reconcile(
  csv: JoinedApp[],
  pendingAdds: JoinedApp[],
  overrides: Overrides,
  pendingContacts: PendingContacts,
): JoinedApp[] {
  const ids = new Set(csv.map((a) => a.id));
  const merged = csv.map((a) => applyOverlay(a, overrides, pendingContacts));
  const adds = pendingAdds.filter((a) => !ids.has(a.id)).map((a) => applyOverlay(a, overrides, pendingContacts));
  return [...adds, ...merged]; // newest adds on top; sort still applies downstream
}
