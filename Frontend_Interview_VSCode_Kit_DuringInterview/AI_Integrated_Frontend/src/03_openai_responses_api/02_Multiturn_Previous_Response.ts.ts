/**
 * INTERVIEW ONE-LINER:
 * previous_response_id lets a backend continue a Responses API conversation without manually resending every prior response item.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import OpenAI from "openai";
const client = new OpenAI();

const first = await client.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5",
  input: "My preferred frontend framework is React."
});

const second = await client.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5",
  previous_response_id: first.id, // Links this request to prior model state.
  input: "What framework did I say?"
});

console.log(second.output_text);
