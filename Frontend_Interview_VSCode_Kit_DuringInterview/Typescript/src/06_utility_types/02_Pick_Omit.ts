/**
 * INTERVIEW ONE-LINER:
 * Pick selects properties while Omit removes selected properties from an object type.
 *
 * RUN: npx tsx src/06_utility_types/02_Pick_Omit.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;name:string;email:string;passwordHash:string}; type PublicUser=Omit<User,"passwordHash">; type Preview=Pick<User,"id"|"name">; const p:Preview={id:1,name:"Sujata"}; console.log(p);
