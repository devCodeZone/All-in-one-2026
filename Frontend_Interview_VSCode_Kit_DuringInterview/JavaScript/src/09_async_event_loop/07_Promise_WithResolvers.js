/**
 * INTERVIEW ONE-LINER:
 * Promise.withResolvers returns a promise together with external resolve/reject functions and is useful when completion is controlled outside the Promise constructor.
 *
 * RUN:
 * node src/09_async_event_loop/07_Promise_WithResolvers.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof Promise.withResolvers === "function") {
  const { promise, resolve } = Promise.withResolvers();

  setTimeout(() => resolve("done"), 20);

  console.log(await promise);
} else {
  console.log("Promise.withResolvers requires ES2024+ runtime support.");
}
