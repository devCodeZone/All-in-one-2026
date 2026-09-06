/**
 * INTERVIEW ONE-LINER:
 * ResizeObserver reacts to element-size changes without global resize polling and is useful for responsive components.
 *
 * RUN:
 * node src/13_browser_dom/07_ResizeObserver.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof ResizeObserver !== "undefined") {
  const observer = new ResizeObserver((entries) => {
    console.log("resized:", entries.length);
  });

  console.log("ResizeObserver created:", observer);
} else {
  console.log("ResizeObserver is browser-only in this Node run.");
}
