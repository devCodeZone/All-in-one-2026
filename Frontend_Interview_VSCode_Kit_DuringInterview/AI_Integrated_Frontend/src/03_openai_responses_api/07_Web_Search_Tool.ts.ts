/**
 * INTERVIEW ONE-LINER:
 * Built-in web search lets the model retrieve current public information when freshness is required instead of relying only on training knowledge.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const requestShape = {
  model: "gpt-5",
  input: "What changed in Angular this month?",
  tools: [
    { type: "web_search" } // Provider executes search; app should display/carry citations.
  ]
};

console.log(requestShape);
