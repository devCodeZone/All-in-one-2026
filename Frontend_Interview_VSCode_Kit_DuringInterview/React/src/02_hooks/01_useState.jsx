import { useState } from "react";

export default function UseStateDemo() {
  const [name, setName] = useState("React");

  return (
    <div className="demo">
      <h2>useState</h2>
      <p className="interview-line">
        Interview one-liner: useState adds local state to a function component and its setter schedules a re-render.
      </p>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}</p>
    </div>
  );
}
