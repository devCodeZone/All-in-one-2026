/**
 * INTERVIEW ONE-LINER:
 * AI latency should be decomposed into network, retrieval, model time-to-first-token, streaming duration, and tool latency so optimization targets the real bottleneck.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const latency = {
  retrievalMs: 120,
  modelFirstTokenMs: 650,
  toolMs: 80,
  remainingStreamMs: 900
};

console.log("total ms:", Object.values(latency).reduce((a, b) => a + b, 0));
