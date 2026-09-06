/**
 * INTERVIEW ONE-LINER:
 * The event loop provides concurrency by interleaving async completions, while true parallel CPU work requires workers/processes or engine internals.
 *
 * RUN:
 * node src/19_senior_interview/08_Concurrency_vs_Parallelism.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const tasks = [
  Promise.resolve("A"),
  new Promise((resolve) => setTimeout(() => resolve("B"), 10)),
];

console.log(await Promise.all(tasks));

console.log("Promise concurrency does not itself create a second JavaScript main thread.");
