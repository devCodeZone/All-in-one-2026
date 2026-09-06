/**
 * INTERVIEW ONE-LINER:
 * Assertion functions use asserts to tell TypeScript that runtime validation guarantees a condition afterward.
 *
 * RUN: npx tsx src/04_unions_narrowing/05_Assertion_Function.ts
 * Important code lines are commented for interview revision.
 */

function assertString(v:unknown):asserts v is string{if(typeof v!=="string")throw new TypeError("Expected string");}
const input:unknown="typescript"; assertString(input); console.log(input.toUpperCase());
