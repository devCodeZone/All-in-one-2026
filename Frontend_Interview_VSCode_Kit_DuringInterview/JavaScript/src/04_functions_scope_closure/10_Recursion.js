/**
 * INTERVIEW ONE-LINER:
 * Recursion solves a problem by calling the same function on a smaller subproblem and requires a terminating base case.
 *
 * RUN:
 * node src/04_functions_scope_closure/10_Recursion.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function factorial(n) {
  if (n <= 1) return 1; // base case prevents infinite recursion.
  return n * factorial(n - 1);
}

console.log(factorial(5));
