/**
 * INTERVIEW ONE-LINER:
 * Object types describe required, optional, and readonly properties of structured values.
 *
 * RUN: npx tsx src/01_basics/04_Object_Optional_Readonly.ts
 * Important code lines are commented for interview revision.
 */

type User={readonly id:number;name:string;email?:string};
const user:User={id:1,name:"Sujata"};
user.name="Senior Developer";
// user.id=2; // compile error: readonly
console.log(user);
