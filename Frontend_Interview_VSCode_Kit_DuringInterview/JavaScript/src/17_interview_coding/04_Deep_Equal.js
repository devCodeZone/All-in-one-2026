/**
 * INTERVIEW ONE-LINER:
 * Deep equality requires explicit semantics for primitives, arrays, object keys, cycles, prototypes, dates, maps, sets, and special values.
 *
 * RUN:
 * node src/17_interview_coding/04_Deep_Equal.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function deepEqual(a, b) {
  if (Object.is(a, b)) return true;

  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) return false;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every(
    (key) => Object.hasOwn(b, key) && deepEqual(a[key], b[key]),
  );
}

console.log(deepEqual({ a: [1, 2] }, { a: [1, 2] }));
