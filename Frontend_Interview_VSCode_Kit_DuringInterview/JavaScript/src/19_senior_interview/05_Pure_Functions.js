/**
 * INTERVIEW ONE-LINER:
 * A pure function returns the same output for the same inputs and has no observable side effects, making it easy to test, cache, and compose.
 *
 * RUN:
 * node src/19_senior_interview/05_Pure_Functions.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function addTax(price, taxRate) {
  // Reads only arguments and does not mutate external state.
  return price * (1 + taxRate);
}

console.log(addTax(100, 0.18));
