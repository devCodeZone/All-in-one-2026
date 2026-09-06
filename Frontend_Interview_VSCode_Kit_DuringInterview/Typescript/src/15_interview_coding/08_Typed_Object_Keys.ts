/**
 * INTERVIEW ONE-LINER:
 * A typed Object.keys helper preserves keyof T for known closed objects but should be used carefully with runtime extra keys.
 *
 * RUN: npx tsx src/15_interview_coding/08_Typed_Object_Keys.ts
 * Important code lines are commented for interview revision.
 */

function typedKeys<T extends object>(o:T):Array<keyof T>{return Object.keys(o) as Array<keyof T>} const u={id:1,name:"Sujata"}; for(const k of typedKeys(u))console.log(k,u[k]);
