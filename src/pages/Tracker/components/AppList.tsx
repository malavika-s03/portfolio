import type { DecoratedApp } from '../types';
import { AppCard } from './AppCard';
import { EmptyState } from './states';

export function AppList({
  apps,
  today,
  selectedId,
  onSelect,
}: {
  apps: DecoratedApp[];
  today: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  if (apps.length === 0) {
    return <EmptyState title="Nothing here" hint="Try a different filter, or clear the search." />;
  }

  return (
    <div className="jt-grid">
      {apps.map((app) => (
        <AppCard
          key={app.id || app.company}
          app={app}
          today={today}
          selected={selectedId === app.id}
          onSelect={() => onSelect(app.id)}
        />
      ))}
    </div>
  );
}
