/**
 * INTERVIEW ONE-LINER:
 * queueMicrotask and Promise reactions schedule microtasks, which run after the current stack but before the next task; excessive microtasks can starve rendering.
 *
 * RUN:
 * node src/09_async_event_loop/06_Microtask_Queue.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log("start");

queueMicrotask(() => console.log("microtask A"));

Promise.resolve().then(() => console.log("microtask B"));

setTimeout(() => console.log("timer"), 0);

console.log("end");

await new Promise((resolve) => setTimeout(resolve, 20));
