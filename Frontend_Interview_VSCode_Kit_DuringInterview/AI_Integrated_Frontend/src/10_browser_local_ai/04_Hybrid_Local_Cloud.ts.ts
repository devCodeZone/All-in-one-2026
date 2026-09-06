/**
 * INTERVIEW ONE-LINER:
 * A hybrid AI architecture routes privacy-sensitive or lightweight tasks locally and sends complex reasoning to cloud models when needed.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Task = {
  kind: "embedding" | "reasoning";
  sensitive: boolean;
};

function chooseExecution(task: Task) {
  if (task.sensitive && task.kind === "embedding") {
    return "local-browser-model";
  }

  return "server-cloud-model";
}

console.log(chooseExecution({ kind: "embedding", sensitive: true }));
