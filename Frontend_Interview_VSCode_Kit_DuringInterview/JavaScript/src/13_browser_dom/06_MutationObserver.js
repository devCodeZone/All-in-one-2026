/**
 * INTERVIEW ONE-LINER:
 * MutationObserver watches DOM structural/attribute/text changes asynchronously and should be scoped carefully to avoid unnecessary work.
 *
 * RUN:
 * node src/13_browser_dom/06_MutationObserver.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof MutationObserver !== "undefined") {
  const observer = new MutationObserver((records) => {
    console.log("mutations:", records.length);
  });

  console.log("MutationObserver created:", observer);
} else {
  console.log("MutationObserver is browser-only in this Node run.");
}
