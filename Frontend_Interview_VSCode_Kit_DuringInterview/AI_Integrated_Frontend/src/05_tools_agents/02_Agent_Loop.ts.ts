/**
 * INTERVIEW ONE-LINER:
 * An agent loop alternates model reasoning/selection with tool execution until it produces a final answer or reaches explicit step/time/tool limits.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const MAX_STEPS = 5;

for (let step = 1; step <= MAX_STEPS; step++) {
  // 1. Ask model what to do next.
  // 2. If it requests a tool, validate + authorize + execute it.
  // 3. Return tool result to model.
  // 4. Stop if final output is produced.
  console.log(`agent step ${step}`);
}

console.log("Always enforce bounded loops to control cost and runaway behavior.");
