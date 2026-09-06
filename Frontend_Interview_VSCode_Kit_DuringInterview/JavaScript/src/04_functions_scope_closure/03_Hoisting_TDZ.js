/**
 * INTERVIEW ONE-LINER:
 * Declarations are processed before execution, but let/const/class remain in the temporal dead zone until initialization while var is initialized to undefined.
 *
 * RUN:
 * node src/04_functions_scope_closure/03_Hoisting_TDZ.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log(legacy); // undefined, not ReferenceError.
var legacy = "var";

// Accessing modern before its declaration would throw a ReferenceError due to the TDZ.
// console.log(modern);
let modern = "let";

console.log(modern);
