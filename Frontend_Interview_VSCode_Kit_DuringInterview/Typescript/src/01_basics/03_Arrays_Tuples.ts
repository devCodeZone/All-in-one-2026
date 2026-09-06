/**
 * INTERVIEW ONE-LINER:
 * Arrays hold one element type while tuples model fixed positions with known types.
 *
 * RUN: npx tsx src/01_basics/03_Arrays_Tuples.ts
 * Important code lines are commented for interview revision.
 */

const skills:string[]=["TS","React","Angular"];
type Result=[status:number,message:string,ok:boolean];
const result:Result=[200,"OK",true];
console.log(skills,result);
