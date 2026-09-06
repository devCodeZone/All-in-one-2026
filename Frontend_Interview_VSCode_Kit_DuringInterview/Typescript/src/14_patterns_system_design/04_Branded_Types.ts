/**
 * INTERVIEW ONE-LINER:
 * Branded types create nominal-like distinctions between structurally identical primitives such as UserId and OrderId.
 *
 * RUN: npx tsx src/14_patterns_system_design/04_Branded_Types.ts
 * Important code lines are commented for interview revision.
 */

type Brand<T,B extends string>=T&{readonly __brand:B}; type UserId=Brand<string,"UserId">; const asUserId=(v:string)=>v as UserId; const id=asUserId("u1"); console.log(id);
