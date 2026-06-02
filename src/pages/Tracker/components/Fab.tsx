// Floating action button — opens the Add sheet. Only rendered when writes are enabled.
export function Fab({ onClick }: { onClick: () => void }) {
  return (
    <button className="jt-fab" onClick={onClick} aria-label="Add application" title="Add application">
      +
    </button>
  );
}
