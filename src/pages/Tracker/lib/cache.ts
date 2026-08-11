// Thin stale-while-revalidate cache in sessionStorage: instant rehydrate on revisit, no spinner.
// Stores the model (facts) only — signals are always derived live. Clears when the tab closes.

import type { JoinedApp } from '../types';

const KEY = 'job-tracker:model:v1';

export interface Cached {
  apps: JoinedApp[];
  fetchedAt: number;
}

export function readCache(): Cached | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Cached) : null;
  } catch {
    return null;
  }
}

export function writeCache(apps: JoinedApp[], fetchedAt: number): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify({ apps, fetchedAt }));
  } catch {
    // quota / private mode — non-fatal, we just lose the cache
  }
}

const DELETES_KEY = 'job-tracker:deletes:v1';

export function readPendingDeletes(): string[] {
  try {
    const raw = sessionStorage.getItem(DELETES_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function writePendingDeletes(ids: string[]): void {
  try {
    sessionStorage.setItem(DELETES_KEY, JSON.stringify(ids));
  } catch {
    // quota / private mode — non-fatal, we just lose the persisted hide
  }
}
