/**
 * INTERVIEW ONE-LINER:
 * Catch variables are safest as unknown because JavaScript can throw any value, not only Error objects.
 *
 * RUN: npx tsx src/12_strict_safety/04_Unknown_Catch.ts
 * Important code lines are commented for interview revision.
 */

try{throw"network failed"}catch(error:unknown){console.log(error instanceof Error?error.message:String(error))}
