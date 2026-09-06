/**
 * INTERVIEW ONE-LINER:
 * Function types define parameter and return contracts and make callbacks type-safe.
 *
 * RUN: npx tsx src/02_functions/01_Function_Types.ts
 * Important code lines are commented for interview revision.
 */

function multiply(a:number,b:number):number{return a*b;}
const operation:(x:number,y:number)=>number=multiply;
console.log(operation(3,4));
