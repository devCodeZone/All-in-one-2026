import { useState } from "react";

export default function XSSSafeRendering() {
  const [text, setText] = useState("<img src=x onerror=alert('xss') />");

  return (
    <div className="demo">
      <h2>XSS-Safe Rendering</h2>
      <p className="interview-line">
        Interview one-liner: React escapes text values by default; avoid dangerouslySetInnerHTML unless content is trusted or sanitized.
      </p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div className="card">{text}</div>
    </div>
  );
}
