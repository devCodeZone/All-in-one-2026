/**
 * INTERVIEW ONE-LINER:
 * Object.keys/values/entries enumerate own enumerable string-keyed properties, while fromEntries reconstructs objects from key-value pairs.
 *
 * RUN:
 * node src/06_objects_prototypes/03_Object_Methods.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const scores = { js: 5, ts: 5, react: 5 };

console.log(Object.keys(scores));
console.log(Object.values(scores));
console.log(Object.entries(scores));

const doubled = Object.fromEntries(
  Object.entries(scores).map(([key, value]) => [key, value * 2]),
);

console.log(doubled);
