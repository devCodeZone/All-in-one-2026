import { useRef, useState } from "react";

export default function ControlledUncontrolled() {
  const [controlled, setControlled] = useState("");
  const uncontrolledRef = useRef(null);

  return (
    <div className="demo">
      <h2>Controlled vs Uncontrolled</h2>
      <p className="interview-line">
        Interview one-liner: Controlled inputs store value in React state; uncontrolled inputs let the DOM own the value and are read through refs.
      </p>
      <input value={controlled} onChange={(e) => setControlled(e.target.value)} placeholder="Controlled" />
      <input ref={uncontrolledRef} defaultValue="DOM owned" />
      <button onClick={() => alert(uncontrolledRef.current?.value)}>Read uncontrolled</button>
    </div>
  );
}
