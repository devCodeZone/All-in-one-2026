/**
 * INTERVIEW ONE-LINER:
 * Generics preserve relationships between input and output types without falling back to any.
 *
 * RUN: npx tsx src/05_generics/01_Generic_Function.ts
 * Important code lines are commented for interview revision.
 */

function identity<T>(v:T):T{return v;}
console.log(identity("TS"),identity(10));
