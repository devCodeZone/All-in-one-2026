import { useState } from "react";

export default function OfflineRetry() {
  const [status, setStatus] = useState("idle");
  const [attempt, setAttempt] = useState(0);

  async function submit() {
    setStatus("sending");
    const nextAttempt = attempt + 1;
    setAttempt(nextAttempt);
    await new Promise((r) => setTimeout(r, 600));

    if (nextAttempt < 2) setStatus("failed - retry");
    else setStatus("success");
  }

  return (
    <div className="demo">
      <h2>System Design: Retry / Offline-Friendly Mutation</h2>
      <p className="interview-line">
        Interview one-liner: Retriable mutations need idempotency, backoff, visible status, and careful handling to avoid duplicate server writes.
      </p>
      <button disabled={status === "sending"} onClick={submit}>Send Mutation</button>
      <p>Status: {status} | attempts: {attempt}</p>
    </div>
  );
}
