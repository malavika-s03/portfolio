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
  const meta = [app.details?.workMode, app.details?.location].filter(Boolean).join(' · ');

  return (
    <button className={`jt-card ${selected ? 'is-selected' : ''}`} onClick={onSelect}>
      <span className="jt-card-bar jt-bar" data-status={app.status} />

      <div className="jt-card-head">
        <span className="jt-card-company">{app.company || 'Untitled'}</span>
        {app.priority && <span className="jt-prio" data-priority={app.priority} title={`${app.priority} priority`} />}
      </div>

      <div className="jt-card-meta">
        <span className="jt-pill" data-status={app.status}>{app.status || '—'}</span>
        {age && <span>{age}</span>}
        {meta && <span className="jt-muted">{meta}</span>}
        {app.contacts.length > 0 && (
          <span>{app.contacts.length} contact{app.contacts.length > 1 ? 's' : ''}</span>
        )}
        {app.addedBy && <span className="jt-muted">by {app.addedBy}</span>}
      </div>

      {app.signals.length > 0 && (
        <div className="jt-card-badges">
          {app.signals.map((s) => (
            <span key={s.type} className={`jt-badge is-${s.severity}`}>{s.label}</span>
          ))}
        </div>
      )}
    </button>
  );
}
