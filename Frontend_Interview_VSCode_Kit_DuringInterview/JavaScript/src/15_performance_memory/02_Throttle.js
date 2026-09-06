/**
 * INTERVIEW ONE-LINER:
 * Throttle limits execution frequency during continuous events such as scroll, resize, pointer movement, or analytics signals.
 *
 * RUN:
 * node src/15_performance_memory/02_Throttle.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function throttle(fn, intervalMs) {
  let lastRun = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastRun >= intervalMs) {
      lastRun = now;
      fn(...args);
    }
  };
}

const track = throttle((value) => console.log("tracked:", value), 50);
track(1);
track(2);
