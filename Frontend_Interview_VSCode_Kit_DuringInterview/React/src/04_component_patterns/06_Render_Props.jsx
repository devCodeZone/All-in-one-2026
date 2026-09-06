import { useState } from "react";

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  return children({ on, toggle: () => setOn((x) => !x) });
}

export default function RenderPropsDemo() {
  return (
    <div className="demo">
      <h2>Render Props Pattern</h2>
      <p className="interview-line">
        Interview one-liner: A render prop shares behavior by passing a function that decides how reusable state should be rendered.
      </p>
      <Toggle>
        {({ on, toggle }) => <button onClick={toggle}>{on ? "ON" : "OFF"}</button>}
      </Toggle>
    </div>
  );
}
