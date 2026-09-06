import { lazy, Suspense, useState } from "react";

const LazyFeature = lazy(() => import("./_LazyFeature.jsx"));

export default function CodeSplitting() {
  const [show, setShow] = useState(false);

  return (
    <div className="demo">
      <h2>Code Splitting + Suspense</h2>
      <p className="interview-line">
        Interview one-liner: React.lazy and Suspense split non-critical code into separate chunks that load only when needed.
      </p>
      <button onClick={() => setShow(true)}>Load Feature</button>
      {show && <Suspense fallback={<p>Loading chunk...</p>}><LazyFeature /></Suspense>}
    </div>
  );
}
