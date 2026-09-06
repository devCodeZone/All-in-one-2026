/**
 * INTERVIEW ONE-LINER:
 * Browser event handlers should narrow currentTarget/target to the correct element type instead of using any.
 *
 * RUN: npx tsx src/11_dom_frontend/02_Event_Types.ts
 * Important code lines are commented for interview revision.
 */

function readInput(event:Event){const t=event.currentTarget; if(typeof HTMLInputElement!=="undefined"&&t instanceof HTMLInputElement)return t.value; return"";} console.log("Typed Event narrowing");
