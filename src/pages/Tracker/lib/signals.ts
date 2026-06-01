// Derived "attention" signals + pulse counts. Pure functions of the model + today's date.
// NEVER cached — recomputed each render so urgency stays correct as days pass.

import { CLOSED_STATUSES, STATUS, THRESHOLDS } from '../config';
import type { DecoratedApp, JoinedApp, Signal } from '../types';
import { daysSince } from './dates';

export function deriveSignals(app: JoinedApp, today: string): Signal[] {
  const out: Signal[] = [];
  const d = app.details;
  const closed = CLOSED_STATUSES.includes(app.status);

  // Follow-up due — the strongest signal (a date you set yourself).
  if (!closed && d?.followUpBy) {
    const due = daysSince(d.followUpBy, today);
    if (due != null && due >= 0) {
      out.push({ type: 'overdue-followup', label: 'Follow-up due', severity: 'high' });
    }
  }

  // Stale "Applied" — applied a while ago, still no movement.
  if (app.status === STATUS.APPLIED && d?.dateApplied) {
    const age = daysSince(d.dateApplied, today);
    if (age != null && age >= THRESHOLDS.staleAppliedDays) {
      out.push({ type: 'stale-applied', label: `Applied ${age}d ago, silent`, severity: 'medium' });
    }
  }

  // Aging "Saved" — decide: apply or drop.
  if (app.status === STATUS.SAVED && app.dateAdded) {
    const age = daysSince(app.dateAdded, today);
    if (age != null && age >= THRESHOLDS.agingSavedDays) {
      out.push({ type: 'aging-saved', label: `Saved ${age}d ago`, severity: 'medium' });
    }
  }

  // "In progress" with no movement — it has a pending task by definition (e.g. still to mail).
  if (app.status === STATUS.IN_PROGRESS) {
    const ref = d?.lastUpdate || app.dateAdded;
    const age = daysSince(ref, today);
    if (age != null && age >= THRESHOLDS.inProgressDays) {
      out.push({ type: 'in-progress-pending', label: `In progress ${age}d — pending`, severity: 'high' });
    }
  }

  // Screening with no plan.
  if (app.status === STATUS.SCREENING && !(d?.nextStep ?? '').trim()) {
    out.push({ type: 'screening-no-plan', label: 'No next step set', severity: 'medium' });
  }

  return out;
}

export function decorate(apps: JoinedApp[], today: string): DecoratedApp[] {
  return apps.map((a) => ({ ...a, signals: deriveSignals(a, today) }));
}

export interface Pulse {
  // Today's newly-added applications, broken down by their CURRENT status (updates live as
  // you change a status), so it always reconciles with the cards.
  today: { added: number; inProgress: number; applied: number };
  overall: { total: number; active: number; needsAttention: number; byStatus: Record<string, number>; byPriority: Record<string, number> };
}

export function computePulse(apps: DecoratedApp[], today: string): Pulse {
  const t = { added: 0, inProgress: 0, applied: 0 };
  const byStatus: Record<string, number> = {};
  const byPriority: Record<string, number> = {};
  let active = 0;
  let needsAttention = 0;

  for (const a of apps) {
    if (a.dateAdded === today) {
      t.added++;
      if (a.status === STATUS.IN_PROGRESS) t.inProgress++;
      else if (a.status === STATUS.APPLIED) t.applied++;
    }
    byStatus[a.status] = (byStatus[a.status] ?? 0) + 1;
    if (a.priority) byPriority[a.priority] = (byPriority[a.priority] ?? 0) + 1;
    if (!CLOSED_STATUSES.includes(a.status)) active++;
    if (a.signals.length > 0) needsAttention++;
  }

  return { today: t, overall: { total: apps.length, active, needsAttention, byStatus, byPriority } };
}
