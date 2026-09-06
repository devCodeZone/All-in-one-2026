/**
 * INTERVIEW ONE-LINER:
 * Know arithmetic, comparison, logical, assignment, ternary, nullish-coalescing, and optional-chaining operators plus their coercion behavior.
 *
 * RUN:
 * node src/01_basics/04_Operators.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const a = 10;
const b = 3;

console.log("arithmetic:", a + b, a - b, a * b, a / b, a % b, a ** b);
console.log("comparison:", a > b, a === b);

// ?? falls back only for null/undefined, unlike || which also treats 0, "" and false as falsy.
console.log(0 || 100, 0 ?? 100);

// ?. safely stops when the left side is nullish.
const user = { profile: { name: "Sujata" } };
console.log(user.profile?.name ?? "Unknown");
