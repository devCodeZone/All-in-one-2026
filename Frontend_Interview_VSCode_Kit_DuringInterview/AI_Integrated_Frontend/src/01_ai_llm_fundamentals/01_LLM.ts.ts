/**
 * INTERVIEW ONE-LINER:
 * An LLM predicts tokens from context; frontend engineers integrate it as a probabilistic service rather than deterministic business logic.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type LLMRequest = {
  instructions: string; // High-level behavior or policy for the model.
  input: string;        // User/task content sent for generation.
};

const request: LLMRequest = {
  instructions: "Answer briefly.",
  input: "What is a token?"
};

console.log(request);
