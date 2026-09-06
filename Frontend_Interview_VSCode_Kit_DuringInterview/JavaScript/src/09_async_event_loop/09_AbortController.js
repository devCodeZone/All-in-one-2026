/**
 * INTERVIEW ONE-LINER:
 * AbortController provides a standard cancellation signal used by fetch and many async APIs to stop obsolete work.
 *
 * RUN:
 * node src/09_async_event_loop/09_AbortController.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const controller = new AbortController();

controller.signal.addEventListener("abort", () => {
  console.log("operation aborted");
});

setTimeout(() => controller.abort("No longer needed"), 20);

await new Promise((resolve) => setTimeout(resolve, 40));
console.log("reason:", controller.signal.reason);
