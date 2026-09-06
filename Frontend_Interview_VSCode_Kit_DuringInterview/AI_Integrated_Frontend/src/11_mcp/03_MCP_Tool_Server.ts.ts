/**
 * INTERVIEW ONE-LINER:
 * An MCP tool server publishes schema-described capabilities so compatible AI hosts can discover and invoke application functions.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


// Representative MCP v2 server shape.
// Exact APIs should follow the SDK version installed in your project.

import { McpServer } from "@modelcontextprotocol/server";

const server = new McpServer({
  name: "frontend-interview-tools",
  version: "1.0.0"
});

console.log(server);
