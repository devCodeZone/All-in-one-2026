/**
 * INTERVIEW ONE-LINER:
 * A React AI chat component needs stable message IDs, explicit async status, abortable requests, streaming-safe updates, and accessible announcements.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { useRef, useState } from "react";

type Message = { id: string; role: "user" | "assistant"; text: string };

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const controller = useRef<AbortController | null>(null);

  async function send(text: string) {
    controller.current?.abort();                 // Cancel previous request if needed.
    controller.current = new AbortController();

    setMessages((old) => [
      ...old,
      { id: crypto.randomUUID(), role: "user", text }
    ]);
    setStatus("loading");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        signal: controller.current.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      setMessages((old) => [
        ...old,
        { id: crypto.randomUUID(), role: "assistant", text: data.text }
      ]);
      setStatus("idle");
    } catch (error) {
      if ((error as Error).name !== "AbortError") setStatus("error");
    }
  }

  return <div aria-live="polite">{messages.length} messages / {status}</div>;
}
