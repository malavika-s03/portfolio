// Small presentational pieces of the detail panel, split out to keep DetailPanel focused on layout.
import type { Contact } from '../types';

export function Field({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="jt-field">
      <div className="jt-field-label">{label}</div>
      <div className="jt-field-value">{value}</div>
    </div>
  );
}

export function Prose({ label, value }: { label: string; value?: string }) {
  if (!value || !value.trim()) return null;
  return (
    <section className="jt-section">
      <h3 className="jt-section-title">{label}</h3>
      <p className="jt-prose">{value}</p>
    </section>
  );
}

export function ContactRow({ c }: { c: Contact }) {
  return (
    <div className="jt-contact">
      <div className="jt-contact-top">
        <span className="jt-contact-name">{c.name || 'Unnamed'}</span>
        {c.theirRole && <span className="jt-contact-role">{c.theirRole}</span>}
      </div>
      <div className="jt-contact-meta">
        {c.email && <a href={`mailto:${c.email}`}>{c.email}</a>}
        {c.linkedin && <a href={c.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
        {c.approached && <span>{c.approached}</span>}
        {c.lastContacted && <span>last: {c.lastContacted}</span>}
      </div>
      {c.notes && <p className="jt-contact-notes">{c.notes}</p>}
    </div>
  );
}
