import { useState } from "react";

export default function StateEvents() {
  // State stores data that changes over time and causes re-rendering.
  const [count, setCount] = useState(0);

  return (
    <div className="demo">
      <h2>State + Events</h2>
      <p className="interview-line">
        Interview one-liner: State represents mutable UI data; event handlers update state and React re-renders the affected component.
      </p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
}
