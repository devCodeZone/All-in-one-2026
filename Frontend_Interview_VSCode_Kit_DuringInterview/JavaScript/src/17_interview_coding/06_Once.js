/**
 * INTERVIEW ONE-LINER:
 * once wraps a function so only its first invocation executes the underlying behavior and later calls reuse the stored result.
 *
 * RUN:
 * node src/17_interview_coding/06_Once.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function once(fn) {
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }

    return result;
  };
}

const initialize = once((name) => `Initialized ${name}`);

console.log(initialize("A"));
console.log(initialize("B")); // first result reused.
