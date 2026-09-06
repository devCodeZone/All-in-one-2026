/**
 * INTERVIEW ONE-LINER:
 * NonNullable removes null and undefined from a union type.
 *
 * RUN: npx tsx src/06_utility_types/05_NonNullable.ts
 * Important code lines are commented for interview revision.
 */

type Maybe={id:number}|null|undefined; type User=NonNullable<Maybe>; const u:User={id:1}; console.log(u);
