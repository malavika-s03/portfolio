import { useEffect, useState } from 'react';
import { MIN_YOE_OPTIONS, PRIORITY_OPTIONS, SHEET_EDIT_URL, STATUS_ORDER } from '../config';
import type { DecoratedApp } from '../types';
import { Field, Prose } from './panelParts';

interface Props {
  app: DecoratedApp | null;
  onClose: () => void;
  writesEnabled: boolean;
  onStatusChange: (id: string, status: string) => void;
  onPriorityChange: (id: string, priority: string) => void;
  onNotesChange: (id: string, notes: string) => void;
  onMinYoeChange: (id: string, minYoe: string) => void;
}

// Slide-over: right drawer on desktop, bottom sheet on mobile. Status, Priority, Min YOE & Notes are
// editable (when writes are on); everything else is read-only. Links out to edit the full row.
export function DetailPanel({ app, onClose, writesEnabled, onStatusChange, onPriorityChange, onNotesChange, onMinYoeChange }: Props) {
  const open = app !== null;
  // Retain the last app while the panel slides out (guarded set-during-render, not an effect).
  const [shown, setShown] = useState<DecoratedApp | null>(app);
  if (app !== null && app !== shown) setShown(app);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const d = shown?.details;

  return (
    <>
      <div className={`jt-overlay ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`jt-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        {shown && (
          <>
            <header className="jt-panel-head">
              <div className="jt-panel-head-main">
                <h2 className="jt-panel-title">{shown.company || 'Untitled'}</h2>
                <div className="jt-panel-tags">
                  {writesEnabled ? (
                    <select
                      className="jt-pill-select"
                      data-status={shown.status}
                      value={shown.status}
                      onChange={(e) => onStatusChange(shown.id, e.target.value)}
                      aria-label="Status"
                    >
                      {STATUS_ORDER.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  ) : (
                    <span className="jt-pill" data-status={shown.status}>{shown.status || '—'}</span>
                  )}

                  <span className="jt-prio-inline">
                    <span className="jt-prio" data-priority={shown.priority} />
                    {writesEnabled ? (
                      <select
                        className="jt-prio-select"
                        value={shown.priority || 'Medium'}
                        onChange={(e) => onPriorityChange(shown.id, e.target.value)}
                        aria-label="Priority"
                      >
                        {PRIORITY_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    ) : (
                      shown.priority
                    )}
                  </span>

                  {shown.id && <span className="jt-panel-id">{shown.id}</span>}
                </div>
              </div>
              <button className="jt-panel-close" onClick={onClose} aria-label="Close">✕</button>
            </header>

            <div className="jt-panel-body">
              {shown.signals.length > 0 && (
                <div className="jt-attn-row">
                  {shown.signals.map((s) => (
                    <span key={s.type} className={`jt-badge is-${s.severity}`}>{s.label}</span>
                  ))}
                </div>
              )}

              <div className="jt-fields">
                <Field label="Platform" value={d?.platform} />
                <Field label="Work mode" value={d?.workMode} />
                {writesEnabled ? (
                  <div className="jt-field">
                    <div className="jt-field-label">Min YOE</div>
                    <select
                      className="jt-field-select"
                      value={d?.minYoe ?? ''}
                      onChange={(e) => onMinYoeChange(shown.id, e.target.value)}
                      aria-label="Min YOE"
                    >
                      <option value="">—</option>
                      {MIN_YOE_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                ) : (
                  <Field label="Min YOE" value={d?.minYoe} />
                )}
                <Field label="Location" value={d?.location} />
                <Field label="Salary" value={d?.salary} />
                <Field label="Glassdoor" value={d?.glassdoor} />
                <Field label="Date added" value={shown.dateAdded} />
                <Field label="Added by" value={shown.addedBy} />
                <Field label="Date applied" value={d?.dateApplied} />
                <Field label="Last update" value={d?.lastUpdate} />
                <Field label="Follow-up by" value={d?.followUpBy} />
              </div>

              <section className="jt-section">
                <h3 className="jt-section-title">Notes</h3>
                {writesEnabled ? (
                  <textarea
                    key={shown.id}
                    className="jt-notes-edit"
                    defaultValue={d?.myNotes ?? ''}
                    placeholder="Add notes — who to contact, next steps, anything…"
                    onBlur={(e) => {
                      if (e.target.value !== (d?.myNotes ?? '')) onNotesChange(shown.id, e.target.value);
                    }}
                  />
                ) : (
                  <p className="jt-prose">{d?.myNotes || '—'}</p>
                )}
              </section>

              <Prose label="Next step" value={d?.nextStep} />
              <Prose label="Job description" value={d?.jobDescription} />
              <Prose label="Requirements" value={d?.requirements} />
              <Prose label="Research notes" value={d?.researchNotes} />
            </div>

            <footer className="jt-panel-foot">
              {shown.link && (
                <a className="jt-foot-btn jt-foot-primary" href={shown.link} target="_blank" rel="noreferrer">
                  Open job ↗
                </a>
              )}
              <a className="jt-foot-btn jt-foot-secondary" href={SHEET_EDIT_URL} target="_blank" rel="noreferrer">
                Edit in Sheet ↗
              </a>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
