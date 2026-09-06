/**
 * INTERVIEW ONE-LINER:
 * Type inference lets TypeScript derive types from values and context, reducing unnecessary annotations.
 *
 * RUN: npx tsx src/01_basics/02_Type_Inference.ts
 * Important code lines are commented for interview revision.
 */

const framework = "TypeScript"; // inferred string
let count = 10;                // inferred number
function add(a:number,b:number){ return a+b; } // return inferred number
console.log(framework,count,add(2,3));
