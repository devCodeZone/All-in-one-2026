/**
 * INTERVIEW ONE-LINER:
 * Use strict equality === by default; loose equality == performs coercion and is mainly worth understanding for legacy/interview edge cases.
 *
 * RUN:
 * node src/01_basics/06_Equality.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log(5 === "5"); // false: different types, no coercion.
console.log(5 == "5");  // true: string is coerced to number.

console.log(null == undefined);   // true under loose-equality special rule.
console.log(null === undefined);  // false.

console.log(Object.is(NaN, NaN)); // true; unlike NaN === NaN.
console.log(Object.is(0, -0));    // false; unlike 0 === -0.
