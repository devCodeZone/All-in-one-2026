/**
 * INTERVIEW ONE-LINER:
 * Fresh object literals receive excess-property checks, helping catch misspelled or unexpected fields.
 *
 * RUN: npx tsx src/19_senior_interview/02_Excess_Property_Check.ts
 * Important code lines are commented for interview revision.
 */

type User={name:string}; const intermediate={name:"Sujata",age:34}; const user:User=intermediate; console.log(user);
