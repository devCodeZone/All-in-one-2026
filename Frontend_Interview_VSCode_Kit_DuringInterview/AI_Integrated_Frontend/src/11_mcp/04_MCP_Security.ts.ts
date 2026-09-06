/**
 * INTERVIEW ONE-LINER:
 * MCP authorization must be enforced by servers/gateways; model intent never substitutes for user identity, scopes, tenant boundaries, or application authorization.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type ToolRequest = {
  userId: string;
  tenantId: string;
  tool: string;
};

function authorize(request: ToolRequest) {
  // Real code verifies authenticated identity and tool-specific scopes.
  return request.userId.length > 0 && request.tenantId.length > 0;
}

console.log(authorize({ userId: "u1", tenantId: "t1", tool: "read_profile" }));
