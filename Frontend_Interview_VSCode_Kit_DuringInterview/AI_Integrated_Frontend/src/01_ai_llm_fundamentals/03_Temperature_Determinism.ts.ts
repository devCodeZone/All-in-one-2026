/**
 * INTERVIEW ONE-LINER:
 * Model generation is probabilistic; lower randomness improves repeatability, but production reliability should come from schemas, validation, tools, and evals—not temperature alone.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const generationPolicy = {
  task: "extract invoice fields",
  preferredApproach: [
    "structured output schema", // Constrains the shape.
    "runtime validation",       // Verifies actual values.
    "eval dataset",             // Measures quality across examples.
    "low variability if supported"
  ]
};

console.log(generationPolicy);
