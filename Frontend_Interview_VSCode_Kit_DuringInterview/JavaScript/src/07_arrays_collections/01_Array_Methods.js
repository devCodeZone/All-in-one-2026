/**
 * INTERVIEW ONE-LINER:
 * map transforms, filter selects, reduce aggregates, find returns the first match, some checks any, and every checks all.
 *
 * RUN:
 * node src/07_arrays_collections/01_Array_Methods.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const numbers = [1, 2, 3, 4, 5];

console.log("map:", numbers.map((n) => n * 2));
console.log("filter:", numbers.filter((n) => n % 2 === 0));
console.log("reduce:", numbers.reduce((sum, n) => sum + n, 0));
console.log("find:", numbers.find((n) => n > 3));
console.log("some:", numbers.some((n) => n > 4));
console.log("every:", numbers.every((n) => n > 0));
