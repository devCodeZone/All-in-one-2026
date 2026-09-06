/**
 * INTERVIEW ONE-LINER:
 * Conditional types select one type or another based on assignability and power reusable compile-time logic.
 *
 * RUN: npx tsx src/07_advanced_types/04_Conditional_Types.ts
 * Important code lines are commented for interview revision.
 */

type ElementType<T>=T extends readonly (infer U)[]?U:T; type A=ElementType<string[]>; type B=ElementType<number>; const a:A="x"; const b:B=1; console.log(a,b);
