/**
 * INTERVIEW ONE-LINER:
 * typeof is useful for primitive/function checks but has quirks, so arrays, null, dates, and cross-realm objects may need dedicated checks.
 *
 * RUN:
 * node src/01_basics/03_Typeof_and_Type_Checking.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const values = ["text", 1, true, undefined, Symbol("x"), 10n, null, [], {}, () => {}];

for (const value of values) {
  // Array.isArray is the reliable built-in array check.
  const type = Array.isArray(value) ? "array" : typeof value;
  console.log(value, "=>", type);
}

console.log("null check:", values[6] === null);
