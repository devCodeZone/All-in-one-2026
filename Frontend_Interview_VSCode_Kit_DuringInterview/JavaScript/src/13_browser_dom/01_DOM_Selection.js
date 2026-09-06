/**
 * INTERVIEW ONE-LINER:
 * DOM querying returns live browser objects and may return null, so select narrowly, cache where appropriate, and prefer semantic markup over heavy manual DOM manipulation.
 *
 * RUN:
 * node src/13_browser_dom/01_DOM_Selection.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof document !== "undefined") {
  const heading = document.querySelector("h1");
  console.log(heading?.textContent);
} else {
  console.log("Browser demo: document is unavailable in Node.");
}
