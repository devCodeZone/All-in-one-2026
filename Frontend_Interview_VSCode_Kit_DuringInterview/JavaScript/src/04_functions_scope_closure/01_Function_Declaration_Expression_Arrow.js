/**
 * INTERVIEW ONE-LINER:
 * Function declarations are hoisted with their body, function expressions are values, and arrow functions have lexical this/arguments.
 *
 * RUN:
 * node src/04_functions_scope_closure/01_Function_Declaration_Expression_Arrow.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


console.log(declared("before declaration")); // works due to function declaration hoisting.

function declared(value) {
  return `Declared: ${value}`;
}

const expression = function (value) {
  return `Expression: ${value}`;
};

const arrow = (value) => `Arrow: ${value}`;

console.log(expression("runtime"), arrow("runtime"));
