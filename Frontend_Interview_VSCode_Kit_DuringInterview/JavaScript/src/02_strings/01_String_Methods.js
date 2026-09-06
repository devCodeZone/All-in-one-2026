/**
 * INTERVIEW ONE-LINER:
 * Strings are immutable primitives; common methods include includes, startsWith, slice, replace, split, trim, and case conversion.
 *
 * RUN:
 * node src/02_strings/01_String_Methods.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const text = "  Senior Frontend JavaScript  ";

// Each operation returns a new string because strings are immutable.
const clean = text.trim();

console.log(clean.includes("Frontend"));
console.log(clean.startsWith("Senior"));
console.log(clean.slice(0, 6));
console.log(clean.replace("JavaScript", "Developer"));
console.log(clean.split(" "));
