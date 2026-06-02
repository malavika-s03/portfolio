// Small presentational pieces of the detail panel, split out to keep DetailPanel focused on layout.

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
