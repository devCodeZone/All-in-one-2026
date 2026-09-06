import { useState } from "react";

export default function StateSelectionStrategy() {
  const [local, setLocal] = useState(0);

  return (
    <div className="demo">
      <h2>State Management Strategy</h2>
      <p className="interview-line">
        Interview one-liner: Keep state as local as possible; use Context for low-frequency shared state and a dedicated store for complex cross-feature state.
      </p>
      <p>Local state example: {local}</p>
      <button onClick={() => setLocal((x) => x + 1)}>Local update</button>
      <div className="card">
        Decision rule: Local state → lifted state → Context → external store only when scale justifies it.
      </div>
    </div>
  );
}
