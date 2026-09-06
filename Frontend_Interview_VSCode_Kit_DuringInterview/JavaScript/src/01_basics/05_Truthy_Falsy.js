/**
 * INTERVIEW ONE-LINER:
 * Falsy values are false, 0, -0, 0n, empty string, null, undefined, and NaN; every other value is truthy.
 *
 * RUN:
 * node src/01_basics/05_Truthy_Falsy.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const values = [false, 0, -0, 0n, "", null, undefined, NaN, [], {}, "0"];

for (const value of values) {
  console.log(String(value), "=>", Boolean(value));
}
