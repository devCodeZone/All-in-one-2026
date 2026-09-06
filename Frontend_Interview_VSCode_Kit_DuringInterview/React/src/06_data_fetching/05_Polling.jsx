import { useEffect, useState } from "react";

export default function PollingDemo() {
  const [enabled, setEnabled] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (!enabled) return;
    const fetchStatus = () => setTime(new Date().toLocaleTimeString());
    fetchStatus();
    const id = setInterval(fetchStatus, 2000);
    return () => clearInterval(id);
  }, [enabled]);

  return (
    <div className="demo">
      <h2>Polling</h2>
      <p className="interview-line">
        Interview one-liner: Polling periodically refetches server state; always clean up the interval and prefer push-based updates for truly real-time data.
      </p>
      <button onClick={() => setEnabled((x) => !x)}>{enabled ? "Stop" : "Start"} Polling</button>
      <p>Last refresh: {time || "—"}</p>
    </div>
  );
}
