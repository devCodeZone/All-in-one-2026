/**
 * INTERVIEW ONE-LINER:
 * Memoization caches deterministic results by input so repeated expensive calculations can be reused at the cost of memory and invalidation complexity.
 *
 * RUN:
 * node src/15_performance_memory/03_Memoization.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function memoize(fn) {
  const cache = new Map();

  return (input) => {
    if (cache.has(input)) {
      return cache.get(input);
    }

    const result = fn(input);
    cache.set(input, result);
    return result;
  };
}

const square = memoize((n) => n * n);

console.log(square(10), square(10));
