import { memo, useState } from "react";

const Child = memo(function Child({ value }) {
  return <div className="card">Memoized child value: {value}</div>;
});

export default function ReactMemoDemo() {
  const [childValue, setChildValue] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div className="demo">
      <h2>React.memo</h2>
      <p className="interview-line">
        Interview one-liner: React.memo skips re-rendering a component when its props are referentially unchanged.
      </p>
      <Child value={childValue} />
      <button onClick={() => setChildValue((x) => x + 1)}>Change child prop</button>
      <button onClick={() => setOther((x) => x + 1)}>Unrelated parent update: {other}</button>
    </div>
  );
}
