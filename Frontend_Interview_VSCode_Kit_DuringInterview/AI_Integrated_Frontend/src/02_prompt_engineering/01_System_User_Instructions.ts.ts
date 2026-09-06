/**
 * INTERVIEW ONE-LINER:
 * Separate durable developer instructions from user content so policy, role, output constraints, and task data are not mixed together.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const prompt = {
  instructions: [
    "You are a senior frontend reviewer.", // Stable behavior.
    "Return concise actionable feedback.", // Output constraint.
    "Do not invent project facts."         // Hallucination guard.
  ].join("\n"),
  input: "Review this React hook for race conditions." // User-specific task.
};

console.log(prompt);
