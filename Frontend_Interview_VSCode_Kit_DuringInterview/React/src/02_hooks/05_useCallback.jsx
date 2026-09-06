import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onAdd }) {
  return <button onClick={onAdd}>Child: Add</button>;
});

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Stable function identity helps memoized children avoid unnecessary renders.
  const add = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div className="demo">
      <h2>useCallback</h2>
      <p className="interview-line">
        Interview one-liner: useCallback memoizes a function reference, mainly useful when passing callbacks to memoized children or hook dependencies.
      </p>
      <p>Count: {count}</p>
      <Child onAdd={add} />
      <button onClick={() => setOther((x) => x + 1)}>Unrelated: {other}</button>
    </div>
  );
}
