import { Profiler, useState } from "react";

export default function ProfilerDemo() {
  const [count, setCount] = useState(0);

  function onRender(id, phase, actualDuration) {
    console.log({ id, phase, actualDuration });
  }

  return (
    <div className="demo">
      <h2>React Profiler API</h2>
      <p className="interview-line">
        Interview one-liner: React Profiler measures render cost so optimization is driven by evidence rather than guesswork.
      </p>
      <Profiler id="Counter" onRender={onRender}>
        <div className="card">Count: {count}</div>
      </Profiler>
      <button onClick={() => setCount((x) => x + 1)}>Render</button>
      <p>Open the console to inspect render timing.</p>
    </div>
  );
}
