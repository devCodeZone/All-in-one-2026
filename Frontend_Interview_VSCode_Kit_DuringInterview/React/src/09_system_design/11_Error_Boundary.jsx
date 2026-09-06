import React, { useState } from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Captured by boundary", error, info);
  }

  render() {
    if (this.state.hasError) return <div className="card">Fallback UI: Something went wrong.</div>;
    return this.props.children;
  }
}

function Risky({ crash }) {
  if (crash) throw new Error("Demo render error");
  return <div className="card">Child rendered safely</div>;
}

export default function ErrorBoundaryDemo() {
  const [crash, setCrash] = useState(false);

  return (
    <div className="demo">
      <h2>System Design: Error Boundary</h2>
      <p className="interview-line">
        Interview one-liner: Error Boundaries isolate render failures and show fallback UI so one broken subtree does not crash the whole application.
      </p>
      <ErrorBoundary><Risky crash={crash} /></ErrorBoundary>
      <button onClick={() => setCrash(true)}>Crash Child</button>
      <p>Reload this demo after triggering the error.</p>
    </div>
  );
}
