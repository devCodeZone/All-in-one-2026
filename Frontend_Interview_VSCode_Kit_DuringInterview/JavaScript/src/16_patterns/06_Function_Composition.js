/**
 * INTERVIEW ONE-LINER:
 * Function composition builds larger transformations from small pure functions and is easiest to reason about when each function has no side effects.
 *
 * RUN:
 * node src/16_patterns/06_Function_Composition.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const trim = (value) => value.trim();
const lower = (value) => value.toLowerCase();
const hyphenate = (value) => value.replaceAll(" ", "-");

const pipe = (...functions) => (input) =>
  functions.reduce((value, fn) => fn(value), input);

const slugify = pipe(trim, lower, hyphenate);

console.log(slugify(" Senior Frontend Developer "));
