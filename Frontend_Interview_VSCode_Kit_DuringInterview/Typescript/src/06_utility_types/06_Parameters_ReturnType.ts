/**
 * INTERVIEW ONE-LINER:
 * Parameters and ReturnType derive function input tuples and return types from an existing function signature.
 *
 * RUN: npx tsx src/06_utility_types/06_Parameters_ReturnType.ts
 * Important code lines are commented for interview revision.
 */

function createUser(id:number,name:string){return{id,name,active:true}} type Args=Parameters<typeof createUser>; type User=ReturnType<typeof createUser>; const a:Args=[1,"Sujata"]; const u:User=createUser(...a); console.log(u);
