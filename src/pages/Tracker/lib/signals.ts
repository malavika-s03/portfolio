// Derived "needs attention" signals + pulse counts. Pure functions of the model + today's date.
// NEVER cached — recomputed each render so urgency stays correct as days pass.

import { CLOSED_STATUSES, STATUS, THRESHOLDS } from '../config';
import type { DecoratedApp, JoinedApp, Signal } from '../types';
import { daysSince } from './dates';

// An app needs attention only if it's High/Medium priority (Low never) AND in an active state
// that's gone stale by > staleDays. Each active status has its own "clock":
//   Saved        -> Date Added        (apply, or drop it)
//   Applied      -> Date Applied      (reach out)
//   Reached out  -> Last Update       (follow up again)
//   Responded    -> Last Update       (move it forward: reach out / accept / reject)
export function deriveSignals(app: JoinedApp, today: string): Signal[] {
  if (app.priority === 'Low') return []; // Low priority is never flagged
  const d = app.details;
  const stale = (iso: string | undefined) => {
    const age = iso ? daysSince(iso, today) : null;
    return age != null && age >= THRESHOLDS.staleDays ? age : null;
  };

  let age: number | null;
  if (app.status === STATUS.SAVED && (age = stale(app.dateAdded)) != null) {
    return [{ type: 'saved-stale', label: `Saved ${age}d — apply`, severity: 'medium' }];
  }
  if (app.status === STATUS.APPLIED && (age = stale(d?.dateApplied || app.dateAdded)) != null) {
    return [{ type: 'applied-stale', label: `Applied ${age}d — reach out`, severity: 'high' }];
  }
  if (app.status === STATUS.REACHED_OUT && (age = stale(d?.lastUpdate)) != null) {
    return [{ type: 'reachedout-stale', label: `Reached out ${age}d — follow up`, severity: 'medium' }];
  }
  if (app.status === STATUS.RESPONDED && (age = stale(d?.lastUpdate)) != null) {
    return [{ type: 'responded-stale', label: `Responded ${age}d — move forward`, severity: 'high' }];
  }
  return [];
}

export function decorate(apps: JoinedApp[], today: string): DecoratedApp[] {
  return apps.map((a) => ({ ...a, signals: deriveSignals(a, today) }));
}

export interface Pulse {
  // Today's newly-added applications (added, and how many are already Applied), plus rows touched today.
  today: { added: number; applied: number; updated: number };
  overall: { total: number; active: number; needsAttention: number; byStatus: Record<string, number>; byPriority: Record<string, number> };
}

export function computePulse(apps: DecoratedApp[], today: string): Pulse {
  const t = { added: 0, applied: 0, updated: 0 };
  const byStatus: Record<string, number> = {};
  const byPriority: Record<string, number> = {};
  let active = 0;
  let needsAttention = 0;

  for (const a of apps) {
    if (a.dateAdded === today) {
      t.added++;
      if (a.status === STATUS.APPLIED) t.applied++;
    }
    if (a.details?.lastUpdate === today) t.updated++;
    byStatus[a.status] = (byStatus[a.status] ?? 0) + 1;
    if (a.priority) byPriority[a.priority] = (byPriority[a.priority] ?? 0) + 1;
    if (!CLOSED_STATUSES.includes(a.status)) active++;
    if (a.signals.length > 0) needsAttention++;
  }

  return { today: t, overall: { total: apps.length, active, needsAttention, byStatus, byPriority } };
}
