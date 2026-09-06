/**
 * INTERVIEW ONE-LINER:
 * isWellFormed and toWellFormed help detect or replace lone UTF-16 surrogates so strings are safe for Unicode-sensitive APIs.
 *
 * RUN:
 * node src/02_strings/04_Unicode_WellFormed.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const malformed = "\uD800"; // lone high surrogate.

console.log("well formed?", malformed.isWellFormed?.() ?? "API unavailable");

if (String.prototype.toWellFormed) {
  console.log("fixed:", malformed.toWellFormed());
}
