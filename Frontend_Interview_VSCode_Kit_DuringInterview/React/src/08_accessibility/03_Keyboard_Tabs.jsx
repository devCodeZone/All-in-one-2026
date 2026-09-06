import { useState } from "react";

const tabs = ["Overview", "Details", "Settings"];

export default function KeyboardTabs() {
  const [active, setActive] = useState(0);

  function onKeyDown(e) {
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % tabs.length);
    if (e.key === "ArrowLeft") setActive((i) => (i - 1 + tabs.length) % tabs.length);
  }

  return (
    <div className="demo">
      <h2>Keyboard Accessible Tabs</h2>
      <p className="interview-line">
        Interview one-liner: Custom widgets must provide keyboard interaction, focus management, and ARIA relationships matching the expected pattern.
      </p>
      <div role="tablist" onKeyDown={onKeyDown}>
        {tabs.map((tab, i) => (
          <button key={tab} role="tab" aria-selected={active === i} onClick={() => setActive(i)}>
            {tab}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="card">{tabs[active]} content</div>
    </div>
  );
}
