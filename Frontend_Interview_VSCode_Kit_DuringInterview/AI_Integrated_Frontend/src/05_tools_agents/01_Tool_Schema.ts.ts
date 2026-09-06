/**
 * INTERVIEW ONE-LINER:
 * Tool schemas are contracts: describe narrowly scoped capabilities with strict arguments, validate them again server-side, and authorize each execution.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { z } from "zod";

const OrderArgs = z.object({
  orderId: z.string().min(1)
});

function executeOrderTool(rawArgs: unknown, currentUserId: string) {
  const args = OrderArgs.parse(rawArgs); // Runtime validation; never trust model-generated JSON.

  // Authorization belongs in application code, not the model.
  console.log("authorized user:", currentUserId, "order:", args.orderId);
}

executeOrderTool({ orderId: "ORD-7" }, "USER-1");
