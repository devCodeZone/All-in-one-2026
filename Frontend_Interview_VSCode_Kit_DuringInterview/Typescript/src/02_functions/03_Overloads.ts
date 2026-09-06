/**
 * INTERVIEW ONE-LINER:
 * Overloads expose multiple caller signatures while sharing a single runtime implementation.
 *
 * RUN: npx tsx src/02_functions/03_Overloads.ts
 * Important code lines are commented for interview revision.
 */

function format(v:string):string;
function format(v:number):string;
function format(v:string|number){return typeof v==="number"?v.toFixed(2):v.trim();}
console.log(format(" TS "),format(12.345));
