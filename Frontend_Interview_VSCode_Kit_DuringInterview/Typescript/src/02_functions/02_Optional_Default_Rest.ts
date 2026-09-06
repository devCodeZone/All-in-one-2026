/**
 * INTERVIEW ONE-LINER:
 * Functions support optional parameters, defaults, and typed rest parameters for flexible signatures.
 *
 * RUN: npx tsx src/02_functions/02_Optional_Default_Rest.ts
 * Important code lines are commented for interview revision.
 */

function greet(name:string,title="Developer",suffix?:string){return `${title} ${name}${suffix?` ${suffix}`:""}`;}
function sum(...values:number[]){return values.reduce((a,b)=>a+b,0);}
console.log(greet("Sujata"),sum(1,2,3));
