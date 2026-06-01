import { useCallback, useEffect, useRef, useState } from 'react';
import { readCache, writeCache } from '../lib/cache';
import { fetchTabs } from '../lib/fetchTabs';
import { buildModel } from '../lib/join';
import type { JoinedApp } from '../types';

type Phase = 'loading' | 'ready' | 'error';

export interface TrackerData {
  apps: JoinedApp[];
  phase: Phase;
  error: string | null;
  fetchedAt: number | null;
  refreshing: boolean;
  refresh: () => void;
}

const REVALIDATE_AFTER = 60_000; // ms — don't refetch fresher than this on mount

export function useTrackerData(): TrackerData {
  const [apps, setApps] = useState<JoinedApp[]>([]);
  const [phase, setPhase] = useState<Phase>('loading');
  const [error, setError] = useState<string | null>(null);
  const [fetchedAt, setFetchedAt] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const inflight = useRef(false);

  // background=true → keep showing current data while we revalidate; a failure is non-fatal.
  const load = useCallback(async (background: boolean) => {
    if (inflight.current) return;
    inflight.current = true;
    if (background) setRefreshing(true);
    try {
      const model = buildModel(await fetchTabs());
      const now = Date.now();
      setApps(model);
      setPhase('ready');
      setError(null);
      setFetchedAt(now);
      writeCache(model, now);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Failed to load tracker data';
      setError(msg);
      if (!background) setPhase('error');
    } finally {
      inflight.current = false;
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setApps(cached.apps);
      setPhase('ready');
      setFetchedAt(cached.fetchedAt);
      if (Date.now() - cached.fetchedAt > REVALIDATE_AFTER) load(true);
    } else {
      load(false);
    }
  }, [load]);

  const refresh = useCallback(() => load(true), [load]);

  return { apps, phase, error, fetchedAt, refreshing, refresh };
}
