import { useState } from "react";

export default function DerivedState() {
  const [first, setFirst] = useState("Senior");
  const [last, setLast] = useState("Developer");

  // Don't store fullName separately; derive it from source state.
  const fullName = `${first} ${last}`;

  return (
    <div className="demo">
      <h2>Derived State</h2>
      <p className="interview-line">
        Interview one-liner: Avoid duplicating state when a value can be derived from existing props or state during render.
      </p>
      <input value={first} onChange={(e) => setFirst(e.target.value)} />
      <input value={last} onChange={(e) => setLast(e.target.value)} />
      <p>{fullName}</p>
    </div>
  );
}
