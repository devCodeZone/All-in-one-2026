/**
 * INTERVIEW ONE-LINER:
 * Assigning an unhandled union case to never gives compile-time exhaustiveness checking.
 *
 * RUN: npx tsx src/04_unions_narrowing/06_Exhaustive_Never.ts
 * Important code lines are commented for interview revision.
 */

type Status="idle"|"loading"|"success";
function label(s:Status):string{switch(s){case"idle":return"Idle";case"loading":return"Loading";case"success":return"Success";default:{const x:never=s;return x;}}}
console.log(label("success"));
