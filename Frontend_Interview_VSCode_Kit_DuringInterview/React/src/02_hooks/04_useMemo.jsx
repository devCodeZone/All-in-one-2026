import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [number, setNumber] = useState(5);
  const [themeTick, setThemeTick] = useState(0);

  const expensive = useMemo(() => {
    // Pretend this calculation is expensive.
    let total = 0;
    for (let i = 0; i < 500000; i++) total += i % (number + 1);
    return total;
  }, [number]);

  return (
    <div className="demo">
      <h2>useMemo</h2>
      <p className="interview-line">
        Interview one-liner: useMemo memoizes a computed value and recomputes it only when its dependencies change.
      </p>
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <p>Computed value: {expensive}</p>
      <button onClick={() => setThemeTick((x) => x + 1)}>Unrelated render ({themeTick})</button>
    </div>
  );
}
