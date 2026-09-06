/**
 * INTERVIEW ONE-LINER:
 * Set stores unique values and modern Set methods support union, intersection, difference, symmetricDifference, and relationship checks.
 *
 * RUN:
 * node src/07_arrays_collections/05_Set.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);

console.log([...a]);

if (typeof a.union === "function") {
  console.log("union:", [...a.union(b)]);
  console.log("intersection:", [...a.intersection(b)]);
  console.log("difference:", [...a.difference(b)]);
} else {
  console.log("Modern Set methods require an ES2025-capable runtime.");
}
