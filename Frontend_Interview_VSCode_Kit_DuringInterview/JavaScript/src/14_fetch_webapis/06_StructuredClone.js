/**
 * INTERVIEW ONE-LINER:
 * structuredClone deep-clones many built-in structured data types and supports transferable objects, unlike JSON stringify/parse hacks.
 *
 * RUN:
 * node src/14_fetch_webapis/06_StructuredClone.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const source = {
  created: new Date(),
  map: new Map([["key", 1]]),
  nested: { value: 10 },
};

const clone = structuredClone(source);

console.log(clone.created instanceof Date);
console.log(clone.map instanceof Map);
console.log(clone.nested !== source.nested);
