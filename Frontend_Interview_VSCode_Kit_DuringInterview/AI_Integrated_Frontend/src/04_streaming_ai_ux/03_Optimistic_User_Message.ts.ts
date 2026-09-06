/**
 * INTERVIEW ONE-LINER:
 * AI chat should render the user's message immediately, then append or stream the assistant response while preserving a stable message ID.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Message = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const messages: Message[] = [];

function submit(text: string) {
  messages.push({
    id: crypto.randomUUID(), // Stable key for rendering/reconciliation.
    role: "user",
    text
  });

  console.log(messages);
}

submit("What is RAG?");
