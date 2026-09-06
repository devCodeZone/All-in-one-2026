/**
 * INTERVIEW ONE-LINER:
 * Know which array APIs mutate; modern toSorted, toReversed, toSpliced, and with provide immutable alternatives to sort, reverse, splice, and index assignment.
 *
 * RUN:
 * node src/07_arrays_collections/02_Mutating_vs_NonMutating.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const original = [3, 1, 2];

// Modern copying methods leave original untouched.
const sorted = original.toSorted((a, b) => a - b);
const reversed = original.toReversed();
const replaced = original.with(0, 99);
const spliced = original.toSpliced(1, 1, 50);

console.log({ original, sorted, reversed, replaced, spliced });
