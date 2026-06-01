import { useMemo, useState } from 'react';
import { todayStr } from '../lib/dates';
import { computePulse, decorate } from '../lib/signals';
import { useFilters } from './useFilters';
import { useTrackerData } from './useTrackerData';

// The whole view-model in one place: fetch → decorate with live signals → pulse → filter/sort →
// selection. Keeps index.tsx purely presentational.
export function useTracker() {
  const today = todayStr();
  const data = useTrackerData();

  const decorated = useMemo(() => decorate(data.apps, today), [data.apps, today]);
  const pulse = useMemo(() => computePulse(decorated, today), [decorated, today]);
  const filters = useFilters(decorated, today);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = useMemo(() => decorated.find((a) => a.id === selectedId) ?? null, [decorated, selectedId]);

  return { today, data, pulse, filters, selected, selectedId, select: setSelectedId };
}
