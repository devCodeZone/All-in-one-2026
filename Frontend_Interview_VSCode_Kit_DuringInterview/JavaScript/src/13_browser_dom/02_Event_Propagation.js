/**
 * INTERVIEW ONE-LINER:
 * DOM events travel through capture, target, and bubble phases; delegation uses bubbling to handle many descendants efficiently.
 *
 * RUN:
 * node src/13_browser_dom/02_Event_Propagation.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof document !== "undefined") {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest?.("button[data-action]");
    if (!button) return;
    console.log("delegated action:", button.dataset.action);
  });
} else {
  console.log("Browser demo: event delegation attaches one ancestor listener.");
}
