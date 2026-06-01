import { useEffect, useState } from 'react';
import { SHEET_EDIT_URL } from '../config';
import type { DecoratedApp } from '../types';
import { ContactRow, Field, Prose } from './panelParts';

// Slide-over: right drawer on desktop, bottom sheet on mobile. Read-only; links out to edit.
export function DetailPanel({ app, onClose }: { app: DecoratedApp | null; onClose: () => void }) {
  const open = app !== null;
  // Retain the last app while the panel slides out (so closing animates instead of blanking).
  // Guarded set-during-render — React's documented "adjust state when a prop changes" pattern.
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
                  <span className="jt-pill" data-status={shown.status}>{shown.status || '—'}</span>
                  {shown.priority && (
                    <span className="jt-prio-inline">
                      <span className="jt-prio" data-priority={shown.priority} />
                      {shown.priority}
                    </span>
                  )}
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
                <Field label="Location" value={d?.location} />
                <Field label="Salary" value={d?.salary} />
                <Field label="Glassdoor" value={d?.glassdoor} />
                <Field label="Tags" value={d?.tags} />
                <Field label="Date added" value={shown.dateAdded} />
                <Field label="Added by" value={shown.addedBy} />
                <Field label="Date applied" value={d?.dateApplied} />
                <Field label="Last update" value={d?.lastUpdate} />
                <Field label="Follow-up by" value={d?.followUpBy} />
              </div>

              <Prose label="Next step" value={d?.nextStep} />
              <Prose label="Job description" value={d?.jobDescription} />
              <Prose label="Requirements" value={d?.requirements} />
              <Prose label="Research notes" value={d?.researchNotes} />
              <Prose label="My notes" value={d?.myNotes} />

              {shown.contacts.length > 0 && (
                <section className="jt-section">
                  <h3 className="jt-section-title">Contacts ({shown.contacts.length})</h3>
                  <div className="jt-contacts">
                    {shown.contacts.map((c) => (
                      <ContactRow key={c.contactId || c.name} c={c} />
                    ))}
                  </div>
                </section>
              )}
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
