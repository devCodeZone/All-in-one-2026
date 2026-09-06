/**
 * INTERVIEW ONE-LINER:
 * Currying transforms a multi-argument function into nested single-argument functions and can improve partial reuse/configuration.
 *
 * RUN:
 * node src/04_functions_scope_closure/09_Currying.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const multiply = (a) => (b) => a * b;

const double = multiply(2); // partially configured function.
console.log(double(5));
