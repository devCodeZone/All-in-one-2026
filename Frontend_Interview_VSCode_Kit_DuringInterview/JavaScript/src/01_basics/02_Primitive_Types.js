/**
 * INTERVIEW ONE-LINER:
 * JavaScript has seven primitive types: string, number, bigint, boolean, undefined, symbol, and null.
 *
 * RUN:
 * node src/01_basics/02_Primitive_Types.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const text = "hello";             // string
const count = 42;                 // number
const big = 9007199254740993n;    // bigint
const enabled = true;             // boolean
const missing = undefined;        // undefined
const key = Symbol("id");          // symbol
const empty = null;               // null primitive value

console.log(typeof text, typeof count, typeof big, typeof enabled);
console.log(typeof missing, typeof key, typeof empty); // typeof null is the historical "object" quirk.
