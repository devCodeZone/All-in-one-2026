import { useId } from "react";

export default function UseIdDemo() {
  const id = useId();

  return (
    <div className="demo">
      <h2>useId</h2>
      <p className="interview-line">
        Interview one-liner: useId generates stable unique IDs useful for accessibility relationships such as label-to-input.
      </p>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" placeholder="name@example.com" />
    </div>
  );
}
