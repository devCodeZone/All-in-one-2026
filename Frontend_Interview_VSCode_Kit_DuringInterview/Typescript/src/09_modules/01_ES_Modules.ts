/**
 * INTERVIEW ONE-LINER:
 * Modern TypeScript follows JavaScript ESM with explicit import/export boundaries and type checking across modules.
 *
 * RUN: npx tsx src/09_modules/01_ES_Modules.ts
 * Important code lines are commented for interview revision.
 */

export const version="6.0"; export function greet(n:string){return`Hello ${n}`} console.log(greet("TypeScript"),version);
