/**
 * INTERVIEW ONE-LINER:
 * as const prevents literal widening and makes object/array properties readonly, preserving exact literal information.
 *
 * RUN: npx tsx src/12_strict_safety/06_As_Const.ts
 * Important code lines are commented for interview revision.
 */

const colors=["red","green","blue"] as const; type Color=(typeof colors)[number]; const c:Color="green"; console.log(c);
