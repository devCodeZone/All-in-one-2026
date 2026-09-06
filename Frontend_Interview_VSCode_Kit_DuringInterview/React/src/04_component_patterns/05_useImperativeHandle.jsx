import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Counter = forwardRef(function Counter(_, ref) {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    reset() { setCount(0); },
    increment() { setCount((c) => c + 1); },
  }), []);

  return <p>Child count: {count}</p>;
});

export default function ImperativeHandleDemo() {
  const ref = useRef(null);

  return (
    <div className="demo">
      <h2>useImperativeHandle</h2>
      <p className="interview-line">
        Interview one-liner: useImperativeHandle limits and customizes what a parent can access through a forwarded ref.
      </p>
      <Counter ref={ref} />
      <button onClick={() => ref.current?.increment()}>Increment child</button>
      <button onClick={() => ref.current?.reset()}>Reset child</button>
    </div>
  );
}
