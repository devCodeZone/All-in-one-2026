/**
 * INTERVIEW ONE-LINER:
 * Prompt caching improves repeated-prefix efficiency by keeping stable instructions/context prefixes consistent and separating frequently changing user content later in the prompt.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const promptLayout = [
  "stable system instructions",
  "stable schema/tool definitions",
  "stable long reference context",
  "changing conversation/user input"
];

console.log(promptLayout);
