/**
 * INTERVIEW ONE-LINER:
 * Model routing selects a model based on task complexity, latency, quality, modality, and cost rather than sending every request to the largest model.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type RouteInput = {
  task: "classification" | "reasoning";
  latencySensitive: boolean;
};

function selectModel(input: RouteInput) {
  if (input.task === "classification" && input.latencySensitive) {
    return "small-fast-model";
  }

  return "reasoning-model";
}

console.log(selectModel({ task: "classification", latencySensitive: true }));
