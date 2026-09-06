import { useState } from "react";

export default function AriaLive() {
  const [message, setMessage] = useState("");

  return (
    <div className="demo">
      <h2>ARIA Live Region</h2>
      <p className="interview-line">
        Interview one-liner: aria-live announces dynamic non-focus changes such as status messages to screen-reader users.
      </p>
      <button onClick={() => setMessage("Profile saved successfully")}>Save</button>
      <p aria-live="polite">{message}</p>
    </div>
  );
}
