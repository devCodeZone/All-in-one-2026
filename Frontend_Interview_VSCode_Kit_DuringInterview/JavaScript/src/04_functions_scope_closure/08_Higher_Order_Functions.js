/**
 * INTERVIEW ONE-LINER:
 * A higher-order function takes or returns functions, enabling reusable behaviors such as map, filter, decorators, middleware, and composition.
 *
 * RUN:
 * node src/04_functions_scope_closure/08_Higher_Order_Functions.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function withLogging(fn) {
  // Return a new function that wraps the original behavior.
  return (...args) => {
    console.log("calling with:", args);
    const result = fn(...args);
    console.log("result:", result);
    return result;
  };
}

const add = withLogging((a, b) => a + b);
add(2, 3);
