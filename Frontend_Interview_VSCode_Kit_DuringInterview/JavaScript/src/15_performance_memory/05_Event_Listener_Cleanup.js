/**
 * INTERVIEW ONE-LINER:
 * Long-lived event listeners retain their callbacks and captured state, so components should remove listeners or use AbortSignal-based cleanup when destroyed.
 *
 * RUN:
 * node src/15_performance_memory/05_Event_Listener_Cleanup.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const target = new EventTarget();
const controller = new AbortController();

target.addEventListener(
  "update",
  () => console.log("received"),
  { signal: controller.signal },
);

target.dispatchEvent(new Event("update"));

// Abort automatically removes listeners registered with this signal.
controller.abort();

target.dispatchEvent(new Event("update")); // no log.
