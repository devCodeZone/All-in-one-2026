/**
 * INTERVIEW ONE-LINER:
 * Synchronous code runs first, then queued microtasks such as Promise callbacks, then task/macrotask callbacks such as timers.
 *
 * RUN:
 * node src/09_async_event_loop/05_Event_Loop_Order.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log("1 - sync");

setTimeout(() => {
  console.log("4 - timer task");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - promise microtask");
});

console.log("2 - sync");

await new Promise((resolve) => setTimeout(resolve, 20));
