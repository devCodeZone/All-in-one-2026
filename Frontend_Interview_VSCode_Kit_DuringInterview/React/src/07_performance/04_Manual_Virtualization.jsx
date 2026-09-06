import { useMemo, useState } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Row ${i + 1}`);
const ROW_HEIGHT = 34;
const VIEW_HEIGHT = 340;

export default function ManualVirtualization() {
  const [scrollTop, setScrollTop] = useState(0);
  const start = Math.floor(scrollTop / ROW_HEIGHT);
  const visibleCount = Math.ceil(VIEW_HEIGHT / ROW_HEIGHT) + 4;

  const visible = useMemo(
    () => items.slice(start, start + visibleCount),
    [start]
  );

  return (
    <div className="demo">
      <h2>List Virtualization</h2>
      <p className="interview-line">
        Interview one-liner: Virtualization renders only visible rows, reducing DOM nodes and render cost for very large lists.
      </p>
      <div
        style={{ height: VIEW_HEIGHT, overflow: "auto", position: "relative", border: "1px solid #ddd" }}
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
      >
        <div style={{ height: items.length * ROW_HEIGHT, position: "relative" }}>
          <div style={{ transform: `translateY(${start * ROW_HEIGHT}px)` }}>
            {visible.map((item) => <div key={item} style={{ height: ROW_HEIGHT }}>{item}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
