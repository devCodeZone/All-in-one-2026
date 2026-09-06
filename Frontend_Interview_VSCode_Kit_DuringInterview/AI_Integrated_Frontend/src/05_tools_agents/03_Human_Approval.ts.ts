/**
 * INTERVIEW ONE-LINER:
 * Require explicit human approval before high-impact tool actions such as sending messages, publishing, purchases, deletions, or production changes.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type PendingAction = {
  id: string;
  description: string;
  approved: boolean;
};

const action: PendingAction = {
  id: "act-1",
  description: "Send customer refund email",
  approved: false
};

if (!action.approved) {
  console.log("Blocked until the user approves.");
}
