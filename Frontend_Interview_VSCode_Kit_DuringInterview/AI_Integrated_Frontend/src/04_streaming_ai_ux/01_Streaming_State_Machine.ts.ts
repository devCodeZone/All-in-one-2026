/**
 * INTERVIEW ONE-LINER:
 * AI chat UIs should model idle, submitted, streaming, completed, stopped, and error states instead of a single loading boolean.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type ChatStatus =
  | "idle"
  | "submitted"
  | "streaming"
  | "completed"
  | "stopped"
  | "error";

let status: ChatStatus = "idle";

function transition(next: ChatStatus) {
  status = next;
  console.log("chat status:", status);
}

transition("submitted");
transition("streaming");
transition("completed");
