/**
 * INTERVIEW ONE-LINER:
 * IntersectionObserver asynchronously reports visibility intersections and is ideal for lazy loading, infinite-scroll sentinels, and viewability tracking.
 *
 * RUN:
 * node src/13_browser_dom/05_IntersectionObserver.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof IntersectionObserver !== "undefined") {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      console.log(entry.isIntersecting);
    }
  });

  console.log("Observer created:", observer);
} else {
  console.log("IntersectionObserver is browser-only in this Node run.");
}
