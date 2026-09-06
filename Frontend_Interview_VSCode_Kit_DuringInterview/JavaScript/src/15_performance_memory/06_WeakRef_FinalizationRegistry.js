/**
 * INTERVIEW ONE-LINER:
 * WeakRef and FinalizationRegistry are specialized GC-aware APIs and should not be used for correctness because garbage-collection timing is nondeterministic.
 *
 * RUN:
 * node src/15_performance_memory/06_WeakRef_FinalizationRegistry.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


let object = { payload: "large" };
const weak = new WeakRef(object);

console.log("currently reachable:", weak.deref());

object = null;

// Do not assume weak.deref() becomes undefined immediately; GC timing is nondeterministic.
console.log("after dropping strong reference:", weak.deref());
