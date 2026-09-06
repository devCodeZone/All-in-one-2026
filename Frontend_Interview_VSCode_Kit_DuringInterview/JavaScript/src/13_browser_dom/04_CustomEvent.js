/**
 * INTERVIEW ONE-LINER:
 * CustomEvent lets browser components publish semantic events with a detail payload, reducing direct coupling.
 *
 * RUN:
 * node src/13_browser_dom/04_CustomEvent.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof EventTarget !== "undefined" && typeof CustomEvent !== "undefined") {
  const bus = new EventTarget();

  bus.addEventListener("toast", (event) => {
    console.log(event.detail);
  });

  bus.dispatchEvent(new CustomEvent("toast", { detail: { message: "Saved" } }));
} else {
  console.log("CustomEvent is a browser-oriented API.");
}
