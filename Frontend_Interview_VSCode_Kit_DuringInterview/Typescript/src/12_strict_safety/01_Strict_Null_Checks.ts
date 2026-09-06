/**
 * INTERVIEW ONE-LINER:
 * Strict null checking forces null/undefined to be handled explicitly instead of silently flowing into ordinary values.
 *
 * RUN: npx tsx src/12_strict_safety/01_Strict_Null_Checks.ts
 * Important code lines are commented for interview revision.
 */

function upper(v:string|null){return v?.toUpperCase()??"N/A"} console.log(upper(null),upper("typescript"));
