/**
 * INTERVIEW ONE-LINER:
 * JavaScript uses lexical scope: a function can access bindings from where it was defined, not from where it is called.
 *
 * RUN:
 * node src/04_functions_scope_closure/02_Scope.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const globalValue = "global";

function outer() {
  const outerValue = "outer";

  function inner() {
    // inner can access its own scope, outer scope, and global scope.
    const innerValue = "inner";
    console.log(innerValue, outerValue, globalValue);
  }

  inner();
}

outer();
