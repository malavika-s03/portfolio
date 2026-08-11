import { useEffect, useMemo, useState } from 'react';
import { todayStr } from '../lib/dates';
import { reconcile } from '../lib/overlay';
import { computePulse, decorate } from '../lib/signals';
import { useFilters } from './useFilters';
import { useMutations } from './useMutations';
import { useTrackerData } from './useTrackerData';

// The whole view-model: fetch CSV -> merge optimistic overlay -> decorate with signals -> pulse ->
// filter/sort -> selection, plus the write mutators. index.tsx stays purely presentational.
export function useTracker() {
  const today = todayStr();
  const data = useTrackerData();
  const mutations = useMutations();

  // When fresh CSV lands, drop overlay entries it now reflects (keeps it from going stale).
  const { prune } = mutations;
  useEffect(() => { prune(data.apps); }, [data.apps, prune]);

  const merged = useMemo(
    () => reconcile(data.apps, mutations.pendingAdds, mutations.overrides, mutations.pendingDeletes),
    [data.apps, mutations.pendingAdds, mutations.overrides, mutations.pendingDeletes],
  );
  const decorated = useMemo(() => decorate(merged, today), [merged, today]);
  const pulse = useMemo(() => computePulse(decorated, today), [decorated, today]);
  const filters = useFilters(decorated, today);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = useMemo(() => decorated.find((a) => a.id === selectedId) ?? null, [decorated, selectedId]);

  return { today, data, pulse, filters, selected, selectedId, select: setSelectedId, mutations };
}
