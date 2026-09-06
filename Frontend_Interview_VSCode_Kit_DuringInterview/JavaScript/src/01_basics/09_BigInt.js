/**
 * INTERVIEW ONE-LINER:
 * BigInt represents arbitrarily large integers but cannot be mixed directly with Number arithmetic.
 *
 * RUN:
 * node src/01_basics/09_BigInt.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const huge = 10n ** 30n;
const another = 2n;

console.log(huge + another);

// Number(huge) is possible but may lose precision.
console.log(typeof huge);
