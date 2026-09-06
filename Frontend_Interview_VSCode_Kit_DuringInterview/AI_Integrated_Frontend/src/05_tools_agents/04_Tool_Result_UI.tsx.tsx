/**
 * INTERVIEW ONE-LINER:
 * Render tool calls as first-class UI states—pending, succeeded, failed, approval-required—rather than hiding them inside plain assistant text.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type ToolState = {
  name: string;
  status: "pending" | "success" | "error";
  summary?: string;
};

export function ToolCallCard({ tool }: { tool: ToolState }) {
  return (
    <article aria-label={`Tool ${tool.name}`}>
      <strong>{tool.name}</strong>
      <div>Status: {tool.status}</div>
      {tool.summary && <p>{tool.summary}</p>}
    </article>
  );
}
