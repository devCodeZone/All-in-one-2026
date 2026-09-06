/**
 * INTERVIEW ONE-LINER:
 * Error.isError provides a cross-realm-safe standard way to determine whether a value is an Error object.
 *
 * RUN:
 * node src/10_errors/04_Error_IsError.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const value = new Error("demo");

if (typeof Error.isError === "function") {
  console.log(Error.isError(value));
} else {
  console.log("Error.isError is ES2026; fallback instanceof:", value instanceof Error);
}
