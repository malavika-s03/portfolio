import { CLOSED_STATUSES, PRIORITY_RANK, STATUS_ORDER, THRESHOLDS } from '../config';
import type { FilterState, SortKey } from '../hooks/useFilters';
import { FacetDropdown } from './FacetDropdown';

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'attention', label: 'Attention first' },
  { key: 'recent', label: 'Newest' },
  { key: 'priority', label: 'Priority' },
];

const ACTIVE_STATUSES = STATUS_ORDER.filter((s) => !CLOSED_STATUSES.includes(s));
const PRIORITY_ORDER = Object.keys(PRIORITY_RANK); // High, Medium, Low

const ATTENTION_TIP = `High/Medium priority (never Low) that's sat > ${THRESHOLDS.staleDays} day:
• Saved — apply (or drop it)
• Applied — reach out
• Reached out / Responded — follow up / move forward`;
const WEEK_TIP = `Added or applied in the last ${THRESHOLDS.recentDays} days`;

export function Toolbar({
  filter,
  setFilter,
  toggleStatus,
  togglePriority,
  clearAll,
  hasFilters,
  statusCounts,
  priorityCounts,
  count,
}: {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  toggleStatus: (s: string) => void;
  togglePriority: (p: string) => void;
  clearAll: () => void;
  hasFilters: boolean;
  statusCounts: Record<string, number>;
  priorityCounts: Record<string, number>;
  count: number;
}) {
  return (
    <div className="jt-toolbar">
      <div className="jt-search">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="search"
          value={filter.query}
          onChange={(e) => setFilter((f) => ({ ...f, query: e.target.value }))}
          placeholder="Search company, tags, notes, contacts…"
        />
      </div>

      {/* All (reset) first, then facets, then the smart toggles, This week last */}
      <button className={`jt-toggle ${!hasFilters ? 'is-on' : ''}`} onClick={clearAll} title="Clear filters — show everything">
        All
      </button>
      <FacetDropdown
        label="Status"
        kind="status"
        options={STATUS_ORDER}
        counts={statusCounts}
        selected={filter.statuses}
        onToggle={toggleStatus}
        onSet={(statuses) => setFilter((f) => ({ ...f, statuses }))}
        quick={[{ label: 'Active', values: ACTIVE_STATUSES }]}
      />
      <FacetDropdown
        label="Priority"
        kind="priority"
        options={PRIORITY_ORDER}
        counts={priorityCounts}
        selected={filter.priorities}
        onToggle={togglePriority}
        onSet={(priorities) => setFilter((f) => ({ ...f, priorities }))}
      />
      <button
        className={`jt-toggle ${filter.needsAttention ? 'is-on' : ''}`}
        onClick={() => setFilter((f) => ({ ...f, needsAttention: !f.needsAttention }))}
        title={ATTENTION_TIP}
      >
        Needs attention
      </button>
      <button
        className={`jt-toggle ${filter.week ? 'is-on' : ''}`}
        onClick={() => setFilter((f) => ({ ...f, week: !f.week }))}
        title={WEEK_TIP}
      >
        This week
      </button>

      <div className="jt-toolbar-right">
        <span className="jt-count">{count} shown</span>
        <select
          className="jt-sort"
          value={filter.sort}
          onChange={(e) => setFilter((f) => ({ ...f, sort: e.target.value as SortKey }))}
          aria-label="Sort"
        >
          {SORTS.map((s) => (
            <option key={s.key} value={s.key}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
