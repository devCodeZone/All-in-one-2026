import { useState } from "react";

function TemperatureInput({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

export default function LiftingState() {
  const [temp, setTemp] = useState("");

  return (
    <div className="demo">
      <h2>Lifting State Up</h2>
      <p className="interview-line">
        Interview one-liner: Lift shared state to the closest common parent so sibling components stay synchronized.
      </p>
      <div className="row">
        <TemperatureInput label="Input A" value={temp} onChange={setTemp} />
        <TemperatureInput label="Input B" value={temp} onChange={setTemp} />
      </div>
    </div>
  );
}
