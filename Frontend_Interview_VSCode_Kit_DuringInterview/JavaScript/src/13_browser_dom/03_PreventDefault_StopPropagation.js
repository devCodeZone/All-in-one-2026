/**
 * INTERVIEW ONE-LINER:
 * preventDefault cancels a browser default action while stopPropagation stops event travel; they solve different problems and should not be used reflexively.
 *
 * RUN:
 * node src/13_browser_dom/03_PreventDefault_StopPropagation.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof document !== "undefined") {
  document.addEventListener("submit", (event) => {
    event.preventDefault(); // stop native navigation/submission.
    console.log("custom submit handling");
  });
} else {
  console.log("Browser demo: preventDefault ≠ stopPropagation.");
}
