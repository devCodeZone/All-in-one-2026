/**
 * INTERVIEW ONE-LINER:
 * ES2025 added Float16Array, DataView float16 accessors, and Math.f16round for compact half-precision floating-point data.
 *
 * RUN:
 * node src/18_es2025_es2026_latest/05_Float16.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof globalThis.Float16Array === "function") {
  const values = new Float16Array([1.1, 2.2]);
  console.log(values);
} else {
  console.log("Float16Array requires an ES2025-capable runtime.");
}

if (typeof Math.f16round === "function") {
  console.log(Math.f16round(1.337));
}
