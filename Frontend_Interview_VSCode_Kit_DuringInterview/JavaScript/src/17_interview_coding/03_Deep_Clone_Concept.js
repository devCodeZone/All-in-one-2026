/**
 * INTERVIEW ONE-LINER:
 * For general structured application data prefer structuredClone; writing a truly correct custom deep clone requires handling cycles and many built-in types.
 *
 * RUN:
 * node src/17_interview_coding/03_Deep_Clone_Concept.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const source = {
  date: new Date(),
  nested: { value: 1 },
  set: new Set([1, 2]),
};

const cloned = structuredClone(source);

console.log(cloned);
console.log(cloned.nested !== source.nested);
