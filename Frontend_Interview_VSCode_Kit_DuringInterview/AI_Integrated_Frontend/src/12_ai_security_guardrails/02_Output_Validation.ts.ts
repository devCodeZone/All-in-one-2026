/**
 * INTERVIEW ONE-LINER:
 * Model output is untrusted input to your application; validate structured values before using them for rendering, database writes, tool arguments, or business logic.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { z } from "zod";

const Recommendation = z.object({
  title: z.string().max(100),
  priority: z.enum(["low", "medium", "high"])
});

const rawModelOutput: unknown = {
  title: "Fix focus management",
  priority: "high"
};

const safe = Recommendation.parse(rawModelOutput);
console.log(safe);
