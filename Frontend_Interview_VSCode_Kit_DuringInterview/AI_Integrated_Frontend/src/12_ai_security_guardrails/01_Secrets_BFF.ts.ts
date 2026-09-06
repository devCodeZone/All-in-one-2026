/**
 * INTERVIEW ONE-LINER:
 * Never call a paid model provider from browser code with a permanent secret; use a backend-for-frontend that owns credentials, policy, rate limits, and logging.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const bad = `fetch("provider", { headers: { Authorization: "Bearer sk-..." } })`;
const good = `fetch("/api/chat", { method: "POST", body: JSON.stringify(payload) })`;

console.log({ bad, good });
