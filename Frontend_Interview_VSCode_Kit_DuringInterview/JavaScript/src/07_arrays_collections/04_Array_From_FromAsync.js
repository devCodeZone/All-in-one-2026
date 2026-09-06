/**
 * INTERVIEW ONE-LINER:
 * Array.from builds arrays from iterables/array-like values, while Array.fromAsync consumes async iterables or promise-like elements.
 *
 * RUN:
 * node src/07_arrays_collections/04_Array_From_FromAsync.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log(Array.from(new Set([1, 2, 2, 3])));

async function* generate() {
  yield 1;
  yield Promise.resolve(2);
}

// Feature-detect ES2026 Array.fromAsync so this file stays runnable on older Node.
if (typeof Array.fromAsync === "function") {
  console.log(await Array.fromAsync(generate()));
} else {
  console.log("Array.fromAsync is ES2026; runtime does not support it yet.");
}
