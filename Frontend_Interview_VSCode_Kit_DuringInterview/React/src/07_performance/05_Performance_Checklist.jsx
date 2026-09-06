export default function PerformanceChecklist() {
  return (
    <div className="demo">
      <h2>Performance Diagnosis Checklist</h2>
      <p className="interview-line">
        Interview one-liner: Diagnose first with Profiler, Web Vitals, network and bundle tools; then optimize the proven bottleneck.
      </p>
      <div className="stack">
        <div className="card">1. React Profiler → expensive re-renders</div>
        <div className="card">2. Network → waterfalls, caching, payload size</div>
        <div className="card">3. Bundle → code splitting and tree shaking</div>
        <div className="card">4. Web Vitals → LCP, INP, CLS</div>
        <div className="card">5. Large lists → virtualization</div>
      </div>
    </div>
  );
}
