/**
 * INTERVIEW ONE-LINER:
 * A generic curry interview solution accumulates arguments until the original function's declared arity is satisfied.
 *
 * RUN:
 * node src/17_interview_coding/05_Curry.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...next) => curried(...args, ...next);
  };
}

const sum3 = (a, b, c) => a + b + c;
const curried = curry(sum3);

console.log(curried(1)(2)(3));
console.log(curried(1, 2)(3));
