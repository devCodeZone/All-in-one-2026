/**
 * INTERVIEW ONE-LINER:
 * JavaScript uses reachability-based garbage collection; memory leaks happen when obsolete objects remain reachable through listeners, timers, caches, globals, or closures.
 *
 * RUN:
 * node src/15_performance_memory/04_Garbage_Collection.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


let cache = new Map();

for (let i = 0; i < 1000; i++) {
  cache.set(i, { payload: "x".repeat(100) });
}

// Explicitly releasing references allows the data to become collectible.
cache.clear();
cache = null;

console.log("References released; actual GC timing is engine-controlled.");
