/**
 * INTERVIEW ONE-LINER:
 * The Responses API is a unified model interface for text, multimodal input, tools, structured outputs, conversation state, and streaming.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import OpenAI from "openai";

const client = new OpenAI(); // Reads OPENAI_API_KEY from the server environment.

const response = await client.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5",
  input: "Give one interview line for React hydration."
});

console.log(response.output_text); // SDK convenience property for aggregated text output.
