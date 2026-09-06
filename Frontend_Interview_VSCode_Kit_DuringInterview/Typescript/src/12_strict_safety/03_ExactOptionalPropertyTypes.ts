/**
 * INTERVIEW ONE-LINER:
 * exactOptionalPropertyTypes distinguishes a missing optional property from explicitly assigning undefined.
 *
 * RUN: npx tsx src/12_strict_safety/03_ExactOptionalPropertyTypes.ts
 * Important code lines are commented for interview revision.
 */

type Options={theme?:"light"|"dark"}; const a:Options={}; console.log(a);
