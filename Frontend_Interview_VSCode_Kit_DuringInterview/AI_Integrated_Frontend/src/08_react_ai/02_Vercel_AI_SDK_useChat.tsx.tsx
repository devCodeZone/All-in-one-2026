/**
 * INTERVIEW ONE-LINER:
 * AI SDK useChat packages common streaming-chat state, transport, messages, status, and tool-aware UI behavior for React applications.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


// Representative current AI SDK pattern.
// Keep provider/model calls on the server route and use a chat transport from the client.

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export function AIChat() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat"
    })
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendMessage({ text: input });
        setInput("");
      }}
    >
      {messages.map((message) => (
        <div key={message.id}>{message.role}</div>
      ))}

      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button disabled={status !== "ready"}>Send</button>
    </form>
  );
}
