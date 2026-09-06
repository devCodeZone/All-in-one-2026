/**
 * INTERVIEW ONE-LINER:
 * Structured Outputs constrain model responses to a JSON Schema so frontend code receives predictable machine-readable data.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
  model: process.env.OPENAI_MODEL || "gpt-5",
  input: "Classify this issue: Button has no accessible name.",
  text: {
    format: {
      type: "json_schema",
      name: "issue_classification",
      strict: true,
      schema: {
        type: "object",
        properties: {
          category: { type: "string", enum: ["a11y", "performance", "correctness"] },
          severity: { type: "string", enum: ["low", "medium", "high"] }
        },
        required: ["category", "severity"],
        additionalProperties: false
      }
    }
  }
});

console.log(response.output_text);
