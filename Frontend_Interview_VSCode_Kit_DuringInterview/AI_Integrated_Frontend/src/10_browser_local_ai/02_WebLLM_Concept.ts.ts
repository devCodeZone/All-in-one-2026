/**
 * INTERVIEW ONE-LINER:
 * WebLLM runs compatible LLMs locally in the browser over WebGPU, improving privacy/offline behavior at the cost of download size, memory, hardware variability, and model capability.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const localLLMTradeoffs = {
  benefits: ["privacy", "offline capability", "no per-request server inference"],
  costs: ["large model download", "GPU/RAM pressure", "browser compatibility", "smaller model quality"]
};

console.log(localLLMTradeoffs);
