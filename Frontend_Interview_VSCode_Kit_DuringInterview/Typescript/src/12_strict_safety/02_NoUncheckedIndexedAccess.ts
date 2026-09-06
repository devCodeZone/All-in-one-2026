/**
 * INTERVIEW ONE-LINER:
 * noUncheckedIndexedAccess adds undefined to unchecked indexed reads, forcing safer bounds/existence handling.
 *
 * RUN: npx tsx src/12_strict_safety/02_NoUncheckedIndexedAccess.ts
 * Important code lines are commented for interview revision.
 */

const skills=["TS","Angular"]; const maybe=skills[10]; console.log(maybe??"No item");
