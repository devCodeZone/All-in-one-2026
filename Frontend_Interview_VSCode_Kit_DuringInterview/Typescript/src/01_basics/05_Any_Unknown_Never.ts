/**
 * INTERVIEW ONE-LINER:
 * any disables checking, unknown requires narrowing, and never represents impossible/non-returning values.
 *
 * RUN: npx tsx src/01_basics/05_Any_Unknown_Never.ts
 * Important code lines are commented for interview revision.
 */

let unsafe:any=123; unsafe="anything";
let safe:unknown="hello";
if(typeof safe==="string") console.log(safe.toUpperCase());
function fail(message:string):never{ throw new Error(message); }
console.log("Prefer unknown over any");
