import { STATUS_ORDER } from '../config';
import type { Pulse as PulseData } from '../lib/signals';

// Two glance widgets: today's activity, and the overall pipeline. Status chips and the attention
// number double as filter toggles, kept in sync with the toolbar.
export function Pulse({
  pulse,
  selectedStatuses,
  attentionOn,
  onToggleStatus,
  onToggleAttention,
}: {
  pulse: PulseData;
  selectedStatuses: string[];
  attentionOn: boolean;
  onToggleStatus: (status: string) => void;
  onToggleAttention: () => void;
}) {
  const { today, overall } = pulse;
  const statuses = STATUS_ORDER.filter((s) => (overall.byStatus[s] ?? 0) > 0);

  return (
    <div className="jt-pulse">
      <div className="jt-widget">
        <div className="jt-widget-label">Today</div>
        <div className="jt-widget-row">
          <Stat n={today.added} word="added" />
          <span className="jt-dotsep">·</span>
          <Stat n={today.inProgress} word="in progress" />
          <span className="jt-dotsep">·</span>
          <Stat n={today.applied} word="applied" />
        </div>
      </div>

      <div className="jt-widget">
        <div className="jt-widget-label">Overall</div>
        <div className="jt-widget-row">
          <button className={`jt-attn-btn ${attentionOn ? 'is-on' : ''}`} onClick={onToggleAttention} title="Filter to what needs attention">
            <span className={`jt-stat-n ${overall.needsAttention ? 'is-alert' : ''}`}>{overall.needsAttention}</span>
            <span className="jt-stat-word">need attention</span>
          </button>
          <span className="jt-dotsep">·</span>
          <Stat n={overall.active} word="active" />
          <div className="jt-statuschips">
            {statuses.map((s) => (
              <button
                key={s}
                className={`jt-statuschip ${selectedStatuses.includes(s) ? 'is-on' : ''}`}
                onClick={() => onToggleStatus(s)}
                title={`Filter: ${s}`}
              >
                <span className="jt-dot" data-status={s} />
                {overall.byStatus[s]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ n, word }: { n: number; word: string }) {
  return (
    <span className="jt-stat">
      <span className="jt-stat-n">{n}</span>
      <span className="jt-stat-word">{word}</span>
    </span>
  );
}
