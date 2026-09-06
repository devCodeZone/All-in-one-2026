/**
 * INTERVIEW ONE-LINER:
 * A type predicate value is Type packages reusable runtime validation that narrows values for TypeScript.
 *
 * RUN: npx tsx src/04_unions_narrowing/04_Type_Guard.ts
 * Important code lines are commented for interview revision.
 */

type Admin={role:"admin";permissions:string[]}; type User={role:"user";name:string};
function isAdmin(v:Admin|User):v is Admin{return v.role==="admin";}
const account:Admin|User={role:"admin",permissions:["write"]}; if(isAdmin(account)) console.log(account.permissions);
