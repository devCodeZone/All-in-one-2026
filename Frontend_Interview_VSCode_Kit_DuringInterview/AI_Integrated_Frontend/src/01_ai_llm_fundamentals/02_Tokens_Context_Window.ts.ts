/**
 * INTERVIEW ONE-LINER:
 * Tokens are model input/output units, and the context window is the maximum token budget available for instructions, conversation, retrieved data, and generated output.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type ContextBudget = {
  system: number;
  history: number;
  retrieval: number;
  outputReserve: number;
};

const budget: ContextBudget = {
  system: 700,        // Developer/system instructions consume context.
  history: 3000,      // Chat history also consumes context.
  retrieval: 5000,    // RAG documents need a controlled budget.
  outputReserve: 2000 // Keep room for the model's answer.
};

console.log("planned context tokens:", Object.values(budget).reduce((a, b) => a + b, 0));
