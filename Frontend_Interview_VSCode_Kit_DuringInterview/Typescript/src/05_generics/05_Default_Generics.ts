/**
 * INTERVIEW ONE-LINER:
 * Default generic parameters provide sensible type defaults while allowing callers to override them.
 *
 * RUN: npx tsx src/05_generics/05_Default_Generics.ts
 * Important code lines are commented for interview revision.
 */

type Result<T=string,E=Error>={ok:true;value:T}|{ok:false;error:E};
const r:Result={ok:true,value:"done"}; console.log(r);
