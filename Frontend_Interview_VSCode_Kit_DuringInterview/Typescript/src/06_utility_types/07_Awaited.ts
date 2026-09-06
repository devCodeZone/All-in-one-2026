/**
 * INTERVIEW ONE-LINER:
 * Awaited recursively unwraps Promise-like types to the eventual resolved value.
 *
 * RUN: npx tsx src/06_utility_types/07_Awaited.ts
 * Important code lines are commented for interview revision.
 */

async function load(){return{id:1,name:"Sujata"}} type User=Awaited<ReturnType<typeof load>>; const u:User=await load(); console.log(u);
