/**
 * INTERVIEW ONE-LINER:
 * Function calling lets the model request application capabilities with schema-validated arguments; your code executes the function and returns the result.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const toolDefinition = {
  type: "function",
  name: "get_order_status",
  description: "Read an order status by order ID.",
  parameters: {
    type: "object",
    properties: {
      orderId: { type: "string" }
    },
    required: ["orderId"],
    additionalProperties: false
  },
  strict: true
};

async function getOrderStatus(orderId: string) {
  // Real code would enforce user authorization before reading this order.
  return { orderId, status: "shipped" };
}

console.log(toolDefinition, await getOrderStatus("ORD-101"));
