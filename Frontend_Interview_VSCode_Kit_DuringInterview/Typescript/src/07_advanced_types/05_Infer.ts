/**
 * INTERVIEW ONE-LINER:
 * infer introduces a type variable inside a conditional type so nested types can be extracted.
 *
 * RUN: npx tsx src/07_advanced_types/05_Infer.ts
 * Important code lines are commented for interview revision.
 */

type PromiseValue<T>=T extends Promise<infer U>?U:T; type User=PromiseValue<Promise<{id:number}>>; const u:User={id:1}; console.log(u);
