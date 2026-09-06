/**
 * INTERVIEW ONE-LINER:
 * Partial makes properties optional, Required makes them mandatory, and Readonly prevents assignment through that type.
 *
 * RUN: npx tsx src/06_utility_types/01_Partial_Required_Readonly.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;name?:string}; const patch:Partial<User>={name:"Updated"}; const full:Required<User>={id:1,name:"Sujata"}; const ro:Readonly<User>={id:2,name:"Read"}; console.log({patch,full,ro});
