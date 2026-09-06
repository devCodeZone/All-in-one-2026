import { useState } from "react";

export default function ListsKeys() {
  const [items, setItems] = useState([
    { id: 1, name: "React" },
    { id: 2, name: "JavaScript" },
    { id: 3, name: "Accessibility" },
  ]);

  return (
    <div className="demo">
      <h2>Lists + Keys</h2>
      <p className="interview-line">
        Interview one-liner: Stable keys help React identify which list items changed, were added, or removed during reconciliation.
      </p>
      {items.map((item) => <div className="card" key={item.id}>{item.name}</div>)}
      <button onClick={() => setItems((old) => [...old].reverse())}>Reverse List</button>
    </div>
  );
}
