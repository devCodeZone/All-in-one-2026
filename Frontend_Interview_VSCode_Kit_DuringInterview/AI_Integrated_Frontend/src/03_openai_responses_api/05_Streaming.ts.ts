/**
 * INTERVIEW ONE-LINER:
 * Streaming sends partial response events as generation happens, reducing perceived latency and enabling progressive AI UI rendering.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import OpenAI from "openai";
const client = new OpenAI();

const stream = await client.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5",
  input: "Explain debounce in three short sentences.",
  stream: true
});

for await (const event of stream) {
  // Streaming APIs emit multiple event types; handle only the events your UI needs.
  if (event.type === "response.output_text.delta") {
    process.stdout.write(event.delta);
  }
}
