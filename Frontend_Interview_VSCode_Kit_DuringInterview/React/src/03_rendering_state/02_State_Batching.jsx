import { useState } from "react";

export default function StateBatching() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const updateBoth = () => {
    // Modern React batches these updates into one render.
    setA((x) => x + 1);
    setB((x) => x + 1);
  };

  return (
    <div className="demo">
      <h2>Automatic State Batching</h2>
      <p className="interview-line">
        Interview one-liner: React batches multiple state updates to reduce unnecessary renders and improve performance.
      </p>
      <p>A: {a} | B: {b}</p>
      <button onClick={updateBoth}>Update Both</button>
    </div>
  );
}
