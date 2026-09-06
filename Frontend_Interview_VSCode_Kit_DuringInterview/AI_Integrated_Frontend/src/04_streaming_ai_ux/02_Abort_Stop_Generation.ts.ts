/**
 * INTERVIEW ONE-LINER:
 * A Stop button should abort the current request/stream, update UI state immediately, and discard late chunks from the cancelled generation.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


let controller: AbortController | null = null;

async function startRequest() {
  controller?.abort();          // Cancel any prior generation.
  controller = new AbortController();

  const response = await fetch("/api/chat", {
    method: "POST",
    signal: controller.signal,  // Connect browser cancellation to fetch.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Explain closures" })
  });

  return response;
}

function stop() {
  controller?.abort("User stopped generation");
}
