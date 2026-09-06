import { useEffect, useState } from "react";

export default function StrictModeDemo() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // In development StrictMode may intentionally run setup+cleanup extra
    // to expose impure effects and missing cleanup.
    setLogs((x) => [...x, "Effect setup"]);
    return () => console.log("Effect cleanup");
  }, []);

  return (
    <div className="demo">
      <h2>Strict Mode Behaviour</h2>
      <p className="interview-line">
        Interview one-liner: StrictMode adds development-only checks and may re-run render/effect logic to reveal unsafe side effects.
      </p>
      <p>Effect entries: {logs.length}</p>
      <p>Open the browser console to observe cleanup during development.</p>
    </div>
  );
}
