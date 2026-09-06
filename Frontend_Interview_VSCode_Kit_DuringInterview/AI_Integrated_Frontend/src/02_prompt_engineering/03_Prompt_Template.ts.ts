/**
 * INTERVIEW ONE-LINER:
 * Prompt templates keep instructions versionable and inject only validated variables into well-defined placeholders.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


function buildReviewPrompt(code: string, framework: "React" | "Angular") {
  // Avoid stringly-scattered prompts across UI components.
  return [
    `Framework: ${framework}`,
    "Task: Find correctness, accessibility, and performance issues.",
    "Code:",
    code
  ].join("\n\n");
}

console.log(buildReviewPrompt("const x = 1;", "React"));
