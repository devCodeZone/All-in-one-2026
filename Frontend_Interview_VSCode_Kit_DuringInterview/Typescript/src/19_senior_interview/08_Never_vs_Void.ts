/**
 * INTERVIEW ONE-LINER:
 * void means a function returns no useful value; never means it cannot complete normally or a code path is impossible.
 *
 * RUN: npx tsx src/19_senior_interview/08_Never_vs_Void.ts
 * Important code lines are commented for interview revision.
 */

function log():void{console.log("returns normally")} function impossible(msg:string):never{throw new Error(msg)} log();
