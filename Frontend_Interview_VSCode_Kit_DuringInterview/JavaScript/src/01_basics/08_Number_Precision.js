/**
 * INTERVIEW ONE-LINER:
 * JavaScript Number uses IEEE-754 double precision, so floating-point arithmetic can have rounding errors and integers are exact only through MAX_SAFE_INTEGER.
 *
 * RUN:
 * node src/01_basics/08_Number_Precision.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log(0.1 + 0.2); // 0.30000000000000004

// Compare floating-point results with a tolerance when exact decimal equality is inappropriate.
const closeEnough = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
console.log("close enough:", closeEnough);

console.log("max safe integer:", Number.MAX_SAFE_INTEGER);
