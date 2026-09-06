/**
 * INTERVIEW ONE-LINER:
 * A closure is a function retaining access to its lexical environment even after the outer function has returned.
 *
 * RUN:
 * node src/04_functions_scope_closure/04_Closure.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function createCounter() {
  let count = 0; // private state captured by the returned function.

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
