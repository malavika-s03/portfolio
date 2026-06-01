import { useEffect } from 'react';
import './tracker.css';
import { AppList } from './components/AppList';
import { DetailPanel } from './components/DetailPanel';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Pulse } from './components/Pulse';
import { Toolbar } from './components/Toolbar';
import { ErrorState, TrackerLoading } from './components/states';
import { useTracker } from './hooks/useTracker';
import { clockTime } from './lib/dates';

function Tracker() {
  const { today, data, pulse, filters, selected, selectedId, select } = useTracker();
  const { apps, phase, error, fetchedAt, refreshing, refresh } = data;
  const { filter, setFilter, visible, toggleStatus, togglePriority, clearAll, hasFilters } = filters;

  useEffect(() => {
    document.title = 'Tracker';
  }, []);

  if (phase === 'loading') return <TrackerLoading />;
  if (phase === 'error' && apps.length === 0) return <ErrorState message={error ?? 'Unknown error'} onRetry={refresh} />;

  return (
    <div className="jt">
      <div className="jt-shell">
        <header className="jt-topbar">
          <div>
            <h1 className="jt-title">Tracker</h1>
            <p className="jt-sub">{pulse.overall.total} application{pulse.overall.total === 1 ? '' : 's'}</p>
          </div>
          <button
            className="jt-refresh"
            onClick={refresh}
            disabled={refreshing}
            title="Refresh from the sheet (published CSV lags ~5 min)"
          >
            <span className={refreshing ? 'jt-spin' : ''}>↻</span>
            {fetchedAt ? `as of ${clockTime(fetchedAt)}` : 'refresh'}
          </button>
        </header>

        <Pulse
          pulse={pulse}
          selectedStatuses={filter.statuses}
          attentionOn={filter.needsAttention}
          onToggleStatus={toggleStatus}
          onToggleAttention={() => setFilter((f) => ({ ...f, needsAttention: !f.needsAttention }))}
        />

        <Toolbar
          filter={filter}
          setFilter={setFilter}
          toggleStatus={toggleStatus}
          togglePriority={togglePriority}
          clearAll={clearAll}
          hasFilters={hasFilters}
          statusCounts={pulse.overall.byStatus}
          priorityCounts={pulse.overall.byPriority}
          count={visible.length}
        />

        <AppList apps={visible} today={today} selectedId={selectedId} onSelect={select} />
      </div>

      <DetailPanel app={selected} onClose={() => select(null)} />
    </div>
  );
}

export function TrackerPage() {
  return (
    <ErrorBoundary>
      <Tracker />
    </ErrorBoundary>
  );
}

export default TrackerPage;
