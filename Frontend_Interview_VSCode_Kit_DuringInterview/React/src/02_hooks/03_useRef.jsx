import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);
  const renders = useRef(0);
  renders.current += 1;

  return (
    <div className="demo">
      <h2>useRef</h2>
      <p className="interview-line">
        Interview one-liner: useRef stores a mutable value across renders without triggering re-renders and can reference DOM nodes.
      </p>
      <input ref={inputRef} placeholder="Focus me" />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
      <p>Render count tracked in ref: {renders.current}</p>
    </div>
  );
}
