/**
 * INTERVIEW ONE-LINER:
 * requestAnimationFrame schedules visual updates before the next browser paint and is preferred over timers for frame-synchronized animation.
 *
 * RUN:
 * node src/13_browser_dom/08_RequestAnimationFrame.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof requestAnimationFrame !== "undefined") {
  requestAnimationFrame((time) => console.log("frame at", time));
} else {
  console.log("requestAnimationFrame is browser-only in this Node run.");
}
