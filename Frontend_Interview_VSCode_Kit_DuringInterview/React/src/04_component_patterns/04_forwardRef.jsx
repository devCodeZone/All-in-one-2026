import { forwardRef, useRef } from "react";

const FancyInput = forwardRef(function FancyInput(props, ref) {
  return <input ref={ref} {...props} />;
});

export default function ForwardRefDemo() {
  const ref = useRef(null);

  return (
    <div className="demo">
      <h2>forwardRef</h2>
      <p className="interview-line">
        Interview one-liner: forwardRef exposes a child DOM node or imperative handle to a parent when direct access is genuinely needed.
      </p>
      <FancyInput ref={ref} placeholder="Child input" />
      <button onClick={() => ref.current?.focus()}>Focus child</button>
    </div>
  );
}
