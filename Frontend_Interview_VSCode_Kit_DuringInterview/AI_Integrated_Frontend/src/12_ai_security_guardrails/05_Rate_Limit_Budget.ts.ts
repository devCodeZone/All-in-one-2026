/**
 * INTERVIEW ONE-LINER:
 * AI endpoints need per-user/tenant rate limits, concurrency caps, token/output limits, and abuse controls because inference is costly and potentially tool-enabled.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Usage = { requestsThisMinute: number; maxRequests: number };

function canRunAI(usage: Usage) {
  return usage.requestsThisMinute < usage.maxRequests;
}

console.log(canRunAI({ requestsThisMinute: 5, maxRequests: 10 }));
