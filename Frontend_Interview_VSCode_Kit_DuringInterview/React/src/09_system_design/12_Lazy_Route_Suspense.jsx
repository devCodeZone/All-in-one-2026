import { lazy, Suspense, useState } from "react";

const Feature = lazy(async () => {
  await new Promise((r) => setTimeout(r, 700));
  return { default: () => <div className="card">Lazy route/feature bundle loaded.</div> };
});

export default function LazyRoute() {
  const [show, setShow] = useState(false);

  return (
    <div className="demo">
      <h2>System Design: Lazy Route + Suspense</h2>
      <p className="interview-line">
        Interview one-liner: Route-level code splitting reduces initial JavaScript by loading feature bundles only when users navigate to them.
      </p>
      <button onClick={() => setShow(true)}>Navigate to Feature</button>
      {show && <Suspense fallback={<p>Loading feature...</p>}><Feature /></Suspense>}
    </div>
  );
}
