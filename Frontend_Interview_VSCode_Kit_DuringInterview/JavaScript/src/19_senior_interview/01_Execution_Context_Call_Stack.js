/**
 * INTERVIEW ONE-LINER:
 * Each function call creates an execution context pushed onto the call stack; synchronous JavaScript runs one stack frame at a time.
 *
 * RUN:
 * node src/19_senior_interview/01_Execution_Context_Call_Stack.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function c() {
  console.log("inside c");
}

function b() {
  c();
}

function a() {
  b();
}

a();

console.log("Calls unwind in LIFO order.");
