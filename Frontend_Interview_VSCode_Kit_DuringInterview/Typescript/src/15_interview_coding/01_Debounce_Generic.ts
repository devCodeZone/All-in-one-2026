/**
 * INTERVIEW ONE-LINER:
 * A generic debounce delays execution until calls stop for a configured interval while preserving argument types.
 *
 * RUN: npx tsx src/15_interview_coding/01_Debounce_Generic.ts
 * Important code lines are commented for interview revision.
 */

function debounce<A extends unknown[]>(fn:(...a:A)=>void,ms:number){let timer:ReturnType<typeof setTimeout>|undefined;return(...a:A)=>{if(timer)clearTimeout(timer);timer=setTimeout(()=>fn(...a),ms)}} const search=debounce((q:string)=>console.log("Searching",q),80); search("type");search("typescript"); await new Promise(r=>setTimeout(r,120));
