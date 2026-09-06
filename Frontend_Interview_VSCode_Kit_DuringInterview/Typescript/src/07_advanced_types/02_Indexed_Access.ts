/**
 * INTERVIEW ONE-LINER:
 * Indexed access types obtain nested property or array-element types using T[K].
 *
 * RUN: npx tsx src/07_advanced_types/02_Indexed_Access.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;profile:{name:string;skills:string[]}}; type Profile=User["profile"]; type Skill=User["profile"]["skills"][number]; const p:Profile={name:"Sujata",skills:["TS"]}; const s:Skill="Angular"; console.log(p,s);
