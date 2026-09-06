/**
 * INTERVIEW ONE-LINER:
 * Promise.try invokes a callback and always returns a Promise, converting synchronous throws and async results into one Promise-based flow.
 *
 * RUN:
 * node src/09_async_event_loop/08_Promise_Try.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof Promise.try === "function") {
  const result = await Promise.try(() => {
    return "works";
  });

  console.log(result);
} else {
  // Equivalent fallback mental model:
  const fallback = Promise.resolve().then(() => "works");
  console.log("Promise.try is ES2025; fallback result:", await fallback);
}
