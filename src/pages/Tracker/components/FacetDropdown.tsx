import { useEffect, useRef, useState } from 'react';

// Reusable compact multi-select: a small button that opens a checkbox menu (used for Status &
// Priority). Collapsed = minimal real estate; a "· N" badge shows how many are picked.
export function FacetDropdown({
  label,
  kind,
  options,
  counts,
  selected,
  onToggle,
  onSet,
  quick = [],
}: {
  label: string;
  kind: 'status' | 'priority' | 'quality';
  options: string[];
  counts: Record<string, number>;
  selected: string[];
  onToggle: (value: string) => void;
  onSet: (values: string[]) => void;
  quick?: { label: string; values: string[] }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="jt-filter" ref={ref}>
      <button className={`jt-filter-btn ${selected.length ? 'is-active' : ''}`} onClick={() => setOpen((o) => !o)}>
        {selected.length ? `${label} · ${selected.length}` : label}
        <span className="jt-caret">▾</span>
      </button>

      {open && (
        <div className="jt-menu" role="menu">
          {quick.length > 0 && (
            <div className="jt-menu-quick">
              {quick.map((q) => (
                <button key={q.label} onClick={() => onSet(q.values)}>{q.label}</button>
              ))}
              {selected.length > 0 && <button onClick={() => onSet([])}>Clear</button>}
            </div>
          )}
          {options.map((o) => (
            <label key={o} className="jt-check">
              <input type="checkbox" checked={selected.includes(o)} onChange={() => onToggle(o)} />
              {kind === 'status'
                ? <span className="jt-dot" data-status={o} />
                : kind === 'priority'
                  ? <span className="jt-prio" data-priority={o} />
                  : <span className="jt-qual" data-quality={o} />}
              <span className="jt-check-name">{o}</span>
              <span className="jt-check-count">{counts[o] ?? 0}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
