/**
 * INTERVIEW ONE-LINER:
 * NaN is a numeric value representing an invalid number result; use Number.isNaN for reliable checks and Number.isFinite for finite-number validation.
 *
 * RUN:
 * node src/01_basics/07_NaN_Infinity.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const result = Number("not-a-number");

console.log(result);                    // NaN
console.log(Number.isNaN(result));      // true
console.log(Number.isFinite(10 / 0));   // false
console.log(Number.isFinite(123));      // true
