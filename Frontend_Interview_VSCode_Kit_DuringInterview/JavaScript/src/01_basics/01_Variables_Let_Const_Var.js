/**
 * INTERVIEW ONE-LINER:
 * Prefer const by default, use let for reassignment, and understand var's function scope plus hoisting for legacy/interview questions.
 *
 * RUN:
 * node src/01_basics/01_Variables_Let_Const_Var.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


// const creates a block-scoped binding that cannot be reassigned.
const framework = "JavaScript";

// let is also block-scoped but allows reassignment.
let years = 9;
years += 1;

// var is function-scoped, not block-scoped; avoid it in modern application code.
if (true) {
  var legacy = "function scoped";
}

console.log(framework, years, legacy);
