import { useState } from "react";

function Item({ name }) {
  const [note, setNote] = useState("");
  return <div className="card"><strong>{name}</strong><input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Local state" /></div>;
}

export default function ReconciliationKeys() {
  const [items, setItems] = useState([{ id: 1, name: "A" }, { id: 2, name: "B" }]);

  return (
    <div className="demo">
      <h2>Reconciliation + Keys</h2>
      <p className="interview-line">
        Interview one-liner: Reconciliation compares element trees; stable keys preserve the correct component identity and state across list updates.
      </p>
      {items.map((x) => <Item key={x.id} name={x.name} />)}
      <button onClick={() => setItems((x) => [...x].reverse())}>Reverse</button>
    </div>
  );
}
