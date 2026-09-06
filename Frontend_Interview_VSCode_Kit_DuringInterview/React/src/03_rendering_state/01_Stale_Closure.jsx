import { useState } from "react";

export default function StaleClosure() {
  const [count, setCount] = useState(0);

  const wrong = () => {
    // Both calls read the same captured "count".
    setCount(count + 1);
    setCount(count + 1);
  };

  const correct = () => {
    // Functional updates always receive the latest queued state.
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div className="demo">
      <h2>Stale Closure + Functional Update</h2>
      <p className="interview-line">
        Interview one-liner: Functional state updates avoid stale captured values when the next state depends on the previous state.
      </p>
      <p>Count: {count}</p>
      <button onClick={wrong}>Wrong +2</button>
      <button onClick={correct}>Correct +2</button>
    </div>
  );
}
