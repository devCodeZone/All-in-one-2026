import { useEffect, useState } from "react";

export default function RealtimePolling() {
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setEvents((old) => [`Update @ ${new Date().toLocaleTimeString()}`, ...old].slice(0, 5));
    }, 1500);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div className="demo">
      <h2>System Design: Real-Time Updates</h2>
      <p className="interview-line">
        Interview one-liner: Use polling for simple periodic freshness and WebSocket/SSE when the server should push frequent real-time updates.
      </p>
      <button onClick={() => setRunning((x) => !x)}>{running ? "Stop" : "Start"} Polling</button>
      {events.map((e) => <div className="card" key={e}>{e}</div>)}
    </div>
  );
}
