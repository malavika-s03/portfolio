import { ageLabel } from '../lib/dates';
import type { DecoratedApp } from '../types';

// Compact card: visual encoding does the work — status accent/pill, priority dot, age, badges.
export function AppCard({
  app,
  today,
  selected,
  onSelect,
}: {
  app: DecoratedApp;
  today: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const age = ageLabel(app.dateAdded, today);
  const yoe = app.details?.minYoe?.trim();
  const yoeLabel = yoe ? `${yoe.endsWith('+') ? yoe : `${yoe}+`} YOE` : '';
  const sig = app.signals[0]; // needs-attention signal (at most one) — shown instead of the status pill

  return (
    <button className={`jt-card ${selected ? 'is-selected' : ''}`} onClick={onSelect}>
      <span className="jt-card-bar jt-bar" data-status={app.status} />

      <div className="jt-card-head">
        <span className="jt-card-company">{app.company || 'Untitled'}</span>
        {app.priority && <span className="jt-prio" data-priority={app.priority} title={`${app.priority} priority`} />}
      </div>

      <div className="jt-card-meta">
        {sig ? (
          <span className={`jt-badge is-${sig.severity}`}>{sig.label}</span>
        ) : (
          <>
            <span className="jt-pill" data-status={app.status}>{app.status || '—'}</span>
            {age && <span>{age}</span>}
          </>
        )}
        {yoeLabel && <span className="jt-muted">{yoeLabel}</span>}
      </div>
    </button>
  );
}
