import { useEffect, useState } from "react";

export default function UseEffectCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Side effect: start interval after render.
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);

    // Cleanup prevents leaks when component unmounts or dependencies change.
    return () => clearInterval(id);
  }, []);

  return (
    <div className="demo">
      <h2>useEffect + Cleanup</h2>
      <p className="interview-line">
        Interview one-liner: useEffect synchronizes React with external systems; cleanup removes subscriptions, timers, or pending work.
      </p>
      <p>Mounted for {seconds}s</p>
    </div>
  );
}
