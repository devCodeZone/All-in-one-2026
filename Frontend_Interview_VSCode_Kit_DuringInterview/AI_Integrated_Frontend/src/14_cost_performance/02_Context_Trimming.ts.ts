/**
 * INTERVIEW ONE-LINER:
 * Long-running AI chats need context management such as summarization, retrieval, truncation, or state extraction instead of blindly resending unlimited history.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


type Message = { role: "user" | "assistant"; text: string };

function keepRecent(messages: Message[], maxMessages = 8) {
  // Demo strategy; production systems can summarize older context.
  return messages.slice(-maxMessages);
}

console.log(keepRecent(Array.from({ length: 12 }, (_, i) => ({
  role: i % 2 ? "assistant" : "user",
  text: `message ${i}`
}))));
