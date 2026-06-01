import { Component, type ReactNode } from 'react';

// Crash isolation: a tracker render error stays contained to /tracker, never the whole site.
export class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="jt">
          <div className="jt-center">
            <div className="jt-message">
              <h2 className="jt-title">Something broke</h2>
              <p className="jt-sub">{this.state.error.message}</p>
              <button onClick={() => window.location.reload()} className="jt-btn jt-btn-primary">Reload</button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
