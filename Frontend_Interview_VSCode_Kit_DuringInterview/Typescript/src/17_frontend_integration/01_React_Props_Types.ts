/**
 * INTERVIEW ONE-LINER:
 * In React, TypeScript should model props, events, refs, state machines, and API contracts without over-annotating inferred locals.
 *
 * RUN: npx tsx src/17_frontend_integration/01_React_Props_Types.ts
 * Important code lines are commented for interview revision.
 */

type ButtonProps={label:string;disabled?:boolean;onClick:()=>void}; const p:ButtonProps={label:"Save",onClick:()=>console.log("save")}; console.log(p);
