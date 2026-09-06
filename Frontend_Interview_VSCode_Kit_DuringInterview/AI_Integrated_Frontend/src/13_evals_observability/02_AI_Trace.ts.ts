/**
 * INTERVIEW ONE-LINER:
 * Trace every AI request with request IDs, model/prompt version, latency, token/cost metadata, tool calls, retrieval IDs, outcome, and user-visible errors—without logging sensitive content unnecessarily.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type AITrace = {
  requestId: string;
  promptVersion: string;
  startedAt: number;
  durationMs?: number;
  outcome?: "success" | "error";
};

const trace: AITrace = {
  requestId: crypto.randomUUID(),
  promptVersion: "review-v3",
  startedAt: Date.now()
};

trace.durationMs = 420;
trace.outcome = "success";

console.log(trace);
