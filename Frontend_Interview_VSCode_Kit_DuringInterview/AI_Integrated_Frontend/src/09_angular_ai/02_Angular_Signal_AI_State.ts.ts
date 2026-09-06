/**
 * INTERVIEW ONE-LINER:
 * Signals are a natural fit for AI UI state such as messages, status, selected citations, tool calls, and streaming progress.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { computed, signal } from "@angular/core";

type Message = { id: string; role: "user" | "assistant"; text: string };

export class AiChatState {
  readonly messages = signal<Message[]>([]);
  readonly streaming = signal(false);

  readonly assistantCount = computed(
    () => this.messages().filter((m) => m.role === "assistant").length
  );

  add(message: Message) {
    this.messages.update((old) => [...old, message]);
  }
}
