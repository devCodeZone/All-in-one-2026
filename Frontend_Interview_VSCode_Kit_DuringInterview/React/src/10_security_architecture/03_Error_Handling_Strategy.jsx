export default function ErrorHandlingStrategy() {
  return (
    <div className="demo">
      <h2>Application Error-Handling Strategy</h2>
      <p className="interview-line">
        Interview one-liner: Handle expected API errors near the feature, unexpected render errors with boundaries, and log actionable diagnostics centrally.
      </p>
      <div className="stack">
        <div className="card">API 4xx → field/feature feedback</div>
        <div className="card">API 5xx → retry/fallback/message</div>
        <div className="card">Render crash → Error Boundary</div>
        <div className="card">Unknown failure → logging + correlation ID</div>
      </div>
    </div>
  );
}
