/**
 * INTERVIEW ONE-LINER:
 * A discriminated union uses a shared literal field to model safe state machines and API results.
 *
 * RUN: npx tsx src/04_unions_narrowing/02_Discriminated_Union.ts
 * Important code lines are commented for interview revision.
 */

type State={status:"loading"}|{status:"success";data:string[]}|{status:"error";error:Error};
function render(s:State){switch(s.status){case"loading":return"Loading";case"success":return `Items ${s.data.length}`;case"error":return s.error.message;}}
console.log(render({status:"success",data:["A","B"]}));
