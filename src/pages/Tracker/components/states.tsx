// Loading / error / empty states + the Suspense fallback for the lazy route.

export function TrackerLoading() {
  return (
    <div className="jt">
      <div className="jt-center">
        <div className="jt-spinner" />
      </div>
    </div>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="jt">
      <div className="jt-center">
        <div className="jt-message">
          <h2 className="jt-title">Couldn’t load the tracker</h2>
          <p className="jt-sub">{message}</p>
          <button onClick={onRetry} className="jt-btn jt-btn-primary">Try again</button>
        </div>
      </div>
    </div>
  );
}

export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="jt-empty">
      <p className="jt-empty-title">{title}</p>
      {hint && <p className="jt-empty-hint">{hint}</p>}
    </div>
  );
}
