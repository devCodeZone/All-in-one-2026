import { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffectDemo() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Runs after DOM mutation but before browser paint.
    setWidth(ref.current?.getBoundingClientRect().width ?? 0);
  }, []);

  return (
    <div className="demo">
      <h2>useLayoutEffect</h2>
      <p className="interview-line">
        Interview one-liner: useLayoutEffect runs before paint and is appropriate for DOM measurement that must avoid visible flicker.
      </p>
      <div ref={ref} className="card">Measure my width</div>
      <p>Width: {Math.round(width)}px</p>
    </div>
  );
}
