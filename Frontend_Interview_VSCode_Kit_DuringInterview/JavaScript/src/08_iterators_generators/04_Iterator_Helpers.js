/**
 * INTERVIEW ONE-LINER:
 * Iterator helpers provide lazy map/filter/take/drop/flatMap/reduce-style operations directly on iterator objects.
 *
 * RUN:
 * node src/08_iterators_generators/04_Iterator_Helpers.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function* numbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const iterator = numbers();

if (typeof iterator.map === "function") {
  // ES2025 iterator helpers stay lazy until consumed.
  console.log([...iterator.map((n) => n * 2).filter((n) => n > 4)]);
} else {
  console.log("Iterator helpers require an ES2025-capable runtime.");
}
