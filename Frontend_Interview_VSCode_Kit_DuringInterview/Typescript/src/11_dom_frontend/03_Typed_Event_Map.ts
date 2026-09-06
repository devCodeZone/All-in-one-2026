/**
 * INTERVIEW ONE-LINER:
 * Typed event maps constrain event names and payloads and are useful for event-bus/component APIs.
 *
 * RUN: npx tsx src/11_dom_frontend/03_Typed_Event_Map.ts
 * Important code lines are commented for interview revision.
 */

type Events={"user:login":{userId:number};"toast:show":{message:string;kind:"success"|"error"}}; function emit<K extends keyof Events>(n:K,p:Events[K]){console.log(n,p)} emit("toast:show",{message:"Saved",kind:"success"});
