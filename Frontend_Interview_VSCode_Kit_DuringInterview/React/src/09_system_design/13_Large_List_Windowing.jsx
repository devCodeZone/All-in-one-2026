import { useState } from "react";

const COUNT = 50000;
const ROW = 32;
const HEIGHT = 320;

export default function LargeListWindowing() {
  const [top, setTop] = useState(0);
  const start = Math.floor(top / ROW);
  const visibleCount = Math.ceil(HEIGHT / ROW) + 5;
  const rows = Array.from({ length: visibleCount }, (_, i) => start + i).filter((i) => i < COUNT);

  return (
    <div className="demo">
      <h2>System Design: Large List Windowing</h2>
      <p className="interview-line">
        Interview one-liner: Windowing keeps DOM size roughly constant even when the logical dataset contains tens of thousands of rows.
      </p>
      <div style={{ height: HEIGHT, overflow: "auto", border: "1px solid #ddd" }} onScroll={(e) => setTop(e.currentTarget.scrollTop)}>
        <div style={{ height: COUNT * ROW, position: "relative" }}>
          <div style={{ position: "absolute", top: start * ROW, left: 0, right: 0 }}>
            {rows.map((i) => <div key={i} style={{ height: ROW }}>Row {i + 1}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
