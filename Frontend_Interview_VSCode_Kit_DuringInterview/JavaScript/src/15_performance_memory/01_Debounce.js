/**
 * INTERVIEW ONE-LINER:
 * Debounce delays execution until calls stop for a period, making it ideal for search input, autosave, and bursty events.
 *
 * RUN:
 * node src/15_performance_memory/01_Debounce.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function debounce(fn, delayMs) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delayMs);
  };
}

const search = debounce((query) => console.log("search:", query), 50);

search("rea");
search("react");

await new Promise((resolve) => setTimeout(resolve, 80));
