/**
 * INTERVIEW ONE-LINER:
 * Generic constraints restrict type parameters to capabilities the implementation actually needs.
 *
 * RUN: npx tsx src/05_generics/02_Constraints.ts
 * Important code lines are commented for interview revision.
 */

function getLength<T extends {length:number}>(v:T){return v.length;}
console.log(getLength("TypeScript"),getLength([1,2,3]));
