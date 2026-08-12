import { useCallback, useEffect, useState } from 'react';
import { emptyDetails, type Override, type Overrides } from '../lib/overlay';
import { readPendingDeletes, writePendingDeletes } from '../lib/cache';
import { addApplication, deleteApplication, setMinYoe, setNotes, setPriority, setQuality, setStatus } from '../lib/writeApi';
import type { JoinedApp, NewApplication } from '../types';

const msg = (e: unknown) => (e instanceof Error ? e.message : 'Something went wrong');

// Owns the optimistic overlay + the write mutators. UI applies the overlay via lib/overlay reconcile.
export function useMutations() {
  const [pendingAdds, setPendingAdds] = useState<JoinedApp[]>([]);
  const [overrides, setOverrides] = useState<Overrides>({});
  const [pendingDeletes, setPendingDeletes] = useState<string[]>(() => readPendingDeletes());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { writePendingDeletes(pendingDeletes); }, [pendingDeletes]);

  const add = useCallback(async (input: NewApplication): Promise<JoinedApp> => {
    setBusy(true);
    setError(null);
    try {
      const r = await addApplication(input);
      const app: JoinedApp = {
        id: r.id, company: r.company, status: r.status, priority: r.priority, quality: r.quality, link: r.link,
        dateAdded: r.dateAdded,
        details: { ...emptyDetails(r.id), myNotes: r.details.myNotes, lastUpdate: r.details.lastUpdate, dateApplied: r.details.dateApplied, minYoe: r.details.minYoe },
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

  const remove = useCallback(async (id: string): Promise<void> => {
    setBusy(true);
    setError(null);
    setPendingDeletes((d) => (d.includes(id) ? d : [...d, id]));
    try {
      await deleteApplication(id);
      // stays in pendingDeletes until prune() sees it gone from the CSV
    } catch (e) {
      setPendingDeletes((d) => d.filter((x) => x !== id)); // roll back
      setError(msg(e));
    } finally {
      setBusy(false);
    }
  }, []);

  // Optimistic field change with rollback on failure.
  const patch = useCallback(async (id: string, optimistic: Override, run: () => Promise<Override>) => {
    let prev: Override | undefined;
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

  const changeQuality = useCallback((id: string, quality: string) =>
    patch(id, { quality }, async () => { await setQuality(id, quality); return { quality }; }), [patch]);

  const changeNotes = useCallback((id: string, notes: string) =>
    patch(id, { myNotes: notes }, async () => {
      const r = await setNotes(id, notes);
      return { myNotes: r.myNotes, lastUpdate: r.lastUpdate };
    }), [patch]);

  const changeMinYoe = useCallback((id: string, minYoe: string) =>
    patch(id, { minYoe }, async () => {
      const r = await setMinYoe(id, minYoe);
      return { minYoe: r.minYoe, lastUpdate: r.lastUpdate };
    }), [patch]);

  // Drop overlay entries the CSV now reflects (called on each refetch) so it doesn't grow or go stale.
  const prune = useCallback((csv: JoinedApp[]) => {
    const byId = new Map(csv.map((a) => [a.id, a]));
    setPendingAdds((p) => p.filter((a) => !byId.has(a.id)));
    setOverrides((o) => {
      const n = { ...o };
      for (const id of Object.keys(n)) {
        const a = byId.get(id);
        if (!a) continue;
        const ov = n[id];
        if ((ov.status === undefined || a.status === ov.status)
          && (ov.priority === undefined || a.priority === ov.priority)
          && (ov.quality === undefined || a.quality === ov.quality)
          && (ov.myNotes === undefined || (a.details?.myNotes ?? '') === ov.myNotes)
          && (ov.minYoe === undefined || (a.details?.minYoe ?? '') === ov.minYoe)) delete n[id];
      }
      return n;
    });
    setPendingDeletes((d) => d.filter((id) => !byId.has(id))); // CSV caught up → stop hiding it
  }, []);

  return { pendingAdds, overrides, pendingDeletes, busy, error, setError, add, remove, changeStatus, changePriority, changeQuality, changeNotes, changeMinYoe, prune };
}
