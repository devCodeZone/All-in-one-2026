/**
 * INTERVIEW ONE-LINER:
 * Math.sumPrecise sums an iterable of Numbers with better numerical accuracy than a naive reduce for values of very different magnitudes.
 *
 * RUN:
 * node src/18_es2025_es2026_latest/02_Math_SumPrecise.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const values = [1e20, 1, -1e20];

const naive = values.reduce((sum, value) => sum + value, 0);
console.log("naive:", naive);

if (typeof Math.sumPrecise === "function") {
  console.log("sumPrecise:", Math.sumPrecise(values));
} else {
  console.log("Math.sumPrecise is ES2026; runtime may not support it yet.");
}
