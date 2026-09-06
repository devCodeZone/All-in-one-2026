import { createPortal } from "react-dom";
import { useState } from "react";

export default function ToastSystem() {
  const [toasts, setToasts] = useState([]);

  function remove(id) {
    setToasts((x) => x.filter((t) => t.id !== id));
  }

  function add(message) {
    const id = crypto.randomUUID();
    setToasts((x) => [...x, { id, message }]);
    setTimeout(() => remove(id), 3000);
  }

  return (
    <div className="demo">
      <h2>System Design: Toast / Notifications</h2>
      <p className="interview-line">
        Interview one-liner: A toast system separates global notification state from portal-based rendering and supports queueing, timers, manual close, and aria-live.
      </p>
      <button onClick={() => add("Saved successfully")}>Create Toast</button>
      {createPortal(
        <div className="toast-container" aria-live="polite">
          {toasts.map((t) => <div className="toast" key={t.id}>{t.message} <button onClick={() => remove(t.id)}>×</button></div>)}
        </div>,
        document.body
      )}
    </div>
  );
}
