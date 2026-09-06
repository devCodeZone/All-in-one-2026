import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);

  return online;
}

export default function CustomHookDemo() {
  const online = useOnlineStatus();

  return (
    <div className="demo">
      <h2>Custom Hook</h2>
      <p className="interview-line">
        Interview one-liner: A custom hook extracts reusable stateful logic without adding another component to the DOM.
      </p>
      <p>Status: <strong>{online ? "Online" : "Offline"}</strong></p>
    </div>
  );
}
