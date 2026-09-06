/**
 * INTERVIEW ONE-LINER:
 * unknown is safer than any because it requires explicit narrowing before operations.
 *
 * RUN: npx tsx src/19_senior_interview/06_Unknown_Over_Any.ts
 * Important code lines are commented for interview revision.
 */

function stringify(v:unknown){return typeof v==="string"?v:JSON.stringify(v)} console.log(stringify({id:1}));
