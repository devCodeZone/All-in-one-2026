/**
 * INTERVIEW ONE-LINER:
 * Promise.all fails fast, allSettled waits for every result, race settles on the first settled promise, and any fulfills on the first fulfillment.
 *
 * RUN:
 * node src/09_async_event_loop/04_Promise_Combinators.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const fast = Promise.resolve("fast");
const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 50));
const failed = Promise.reject(new Error("failed"));

console.log("all:", await Promise.all([fast, slow]));
console.log("allSettled:", await Promise.allSettled([fast, failed]));
console.log("race:", await Promise.race([fast, slow]));
console.log("any:", await Promise.any([failed, fast]));
