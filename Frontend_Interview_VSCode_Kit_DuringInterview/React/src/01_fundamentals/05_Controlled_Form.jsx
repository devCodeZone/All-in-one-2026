import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  return (
    <div className="demo">
      <h2>Controlled Form</h2>
      <p className="interview-line">
        Interview one-liner: In a controlled input, React state is the source of truth for the field value.
      </p>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <p>Current value: {name || "—"}</p>
    </div>
  );
}
