/**
 * INTERVIEW ONE-LINER:
 * localStorage persists string data across sessions while sessionStorage is scoped to a tab/session; neither is appropriate for secrets.
 *
 * RUN:
 * node src/13_browser_dom/09_Web_Storage.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof localStorage !== "undefined") {
  localStorage.setItem("theme", "dark");
  console.log(localStorage.getItem("theme"));
} else {
  console.log("Browser demo: localStorage/sessionStorage are unavailable in Node.");
}
