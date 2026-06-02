import { useCallback, useState } from 'react';
import { emptyDetails, type Overrides, type PendingContacts } from '../lib/overlay';
import { addApplication, addContact, setPriority, setStatus } from '../lib/writeApi';
import type { Contact, JoinedApp, NewApplication, ParsedContact } from '../types';

const msg = (e: unknown) => (e instanceof Error ? e.message : 'Something went wrong');

// Owns the optimistic overlay + the write mutators. UI applies the overlay via lib/overlay reconcile.
export function useMutations() {
  const [pendingAdds, setPendingAdds] = useState<JoinedApp[]>([]);
  const [overrides, setOverrides] = useState<Overrides>({});
  const [pendingContacts, setPendingContacts] = useState<PendingContacts>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const add = useCallback(async (input: NewApplication): Promise<JoinedApp> => {
    setBusy(true);
    setError(null);
    try {
      const r = await addApplication(input);
      const app: JoinedApp = {
        id: r.id, company: r.company, status: r.status, priority: r.priority, link: r.link,
        dateAdded: r.dateAdded, addedBy: r.addedBy,
        details: { ...emptyDetails(r.id), myNotes: r.details.myNotes, lastUpdate: r.details.lastUpdate, dateApplied: r.details.dateApplied },
        contacts: [],
      };
      setPendingAdds((p) => [app, ...p]);
      return app;
    } catch (e) {
      setError(msg(e));
      throw e;
    } finally {
      setBusy(false);
    }
  }, []);

  // Optimistic field change with rollback on failure.
  const patch = useCallback(async (id: string, optimistic: Partial<Overrides[string]>, run: () => Promise<Partial<Overrides[string]>>) => {
    let prev: Overrides[string] | undefined;
    setOverrides((o) => { prev = o[id]; return { ...o, [id]: { ...o[id], ...optimistic } }; });
    try {
      const confirmed = await run();
      setOverrides((o) => ({ ...o, [id]: { ...o[id], ...confirmed } }));
    } catch (e) {
      setOverrides((o) => { const n = { ...o }; if (prev === undefined) delete n[id]; else n[id] = prev; return n; });
      setError(msg(e));
    }
  }, []);

  const changeStatus = useCallback((id: string, status: string) =>
    patch(id, { status }, async () => {
      const r = await setStatus(id, status);
      return { status, lastUpdate: r.lastUpdate, ...(r.dateApplied ? { dateApplied: r.dateApplied } : {}) };
    }), [patch]);

  const changePriority = useCallback((id: string, priority: string) =>
    patch(id, { priority }, async () => { await setPriority(id, priority); return { priority }; }), [patch]);

  const addContactTo = useCallback(async (appId: string, parsed: ParsedContact): Promise<Contact> => {
    setError(null);
    try {
      const c = await addContact(appId, parsed);
      setPendingContacts((pc) => ({ ...pc, [appId]: [...(pc[appId] ?? []), c] }));
      return c;
    } catch (e) {
      setError(msg(e));
      throw e;
    }
  }, []);

  // Drop overlay entries the CSV now reflects (called on each refetch) so it doesn't grow or go stale.
  const prune = useCallback((csv: JoinedApp[]) => {
    const byId = new Map(csv.map((a) => [a.id, a]));
    setPendingAdds((p) => p.filter((a) => !byId.has(a.id)));
    setOverrides((o) => {
      const n = { ...o };
      for (const id of Object.keys(n)) {
        const a = byId.get(id);
        if (a && (n[id].status === undefined || a.status === n[id].status) && (n[id].priority === undefined || a.priority === n[id].priority)) delete n[id];
      }
      return n;
    });
    setPendingContacts((pc) => {
      const n = { ...pc };
      for (const appId of Object.keys(n)) {
        const a = byId.get(appId);
        if (a) {
          const have = new Set(a.contacts.map((c) => c.contactId));
          n[appId] = n[appId].filter((c) => !have.has(c.contactId));
          if (!n[appId].length) delete n[appId];
        }
      }
      return n;
    });
  }, []);

  return { pendingAdds, overrides, pendingContacts, busy, error, setError, add, changeStatus, changePriority, addContactTo, prune };
}
