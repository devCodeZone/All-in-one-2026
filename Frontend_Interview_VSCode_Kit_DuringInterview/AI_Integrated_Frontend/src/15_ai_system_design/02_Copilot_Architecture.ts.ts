/**
 * INTERVIEW ONE-LINER:
 * An in-product copilot should be context-aware, scoped to the current user/resource, offer explainable actions, and require confirmation for consequential mutations.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type CopilotContext = {
  userId: string;
  route: string;
  selectedEntityId?: string;
  permissions: string[];
};

const context: CopilotContext = {
  userId: "u1",
  route: "/orders",
  selectedEntityId: "order-17",
  permissions: ["order:read"]
};

console.log(context);
