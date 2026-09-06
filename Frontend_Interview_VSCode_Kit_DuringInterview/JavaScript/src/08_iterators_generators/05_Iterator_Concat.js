/**
 * INTERVIEW ONE-LINER:
 * Iterator.concat sequences several iterable inputs lazily into one iterator without eagerly materializing all values.
 *
 * RUN:
 * node src/08_iterators_generators/05_Iterator_Concat.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (globalThis.Iterator && typeof Iterator.concat === "function") {
  console.log([...Iterator.concat([1, 2], new Set([3, 4]))]);
} else {
  console.log("Iterator.concat is an ES2026 feature; runtime may not support it yet.");
}
