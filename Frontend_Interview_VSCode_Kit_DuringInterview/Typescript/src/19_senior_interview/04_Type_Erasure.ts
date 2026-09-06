/**
 * INTERVIEW ONE-LINER:
 * TypeScript types are erased during compilation, so interfaces and aliases cannot perform runtime validation.
 *
 * RUN: npx tsx src/19_senior_interview/04_Type_Erasure.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number}; const u:User={id:1}; console.log(u,"User type no longer exists at runtime");
