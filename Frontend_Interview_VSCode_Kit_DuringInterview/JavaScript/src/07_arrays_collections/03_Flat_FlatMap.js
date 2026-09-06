/**
 * INTERVIEW ONE-LINER:
 * flat reduces nested array depth while flatMap maps each item and flattens one level in one operation.
 *
 * RUN:
 * node src/07_arrays_collections/03_Flat_FlatMap.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const nested = [[1, 2], [3, 4]];
console.log(nested.flat());

const words = ["hello world", "senior frontend"];
console.log(words.flatMap((text) => text.split(" ")));
