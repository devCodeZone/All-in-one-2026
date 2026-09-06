/**
 * INTERVIEW ONE-LINER:
 * Strict equality compares object identity, not deep structure; deep equality requires application-specific structural semantics.
 *
 * RUN:
 * node src/19_senior_interview/06_Deep_vs_Shallow_Equality.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const a = { id: 1 };
const b = { id: 1 };
const same = a;

console.log(a === b);    // false: different identities.
console.log(a === same); // true.
