/**
 * INTERVIEW ONE-LINER:
 * Throttle limits a function to at most one execution per interval for high-frequency events such as scroll/resize.
 *
 * RUN: npx tsx src/15_interview_coding/02_Throttle_Generic.ts
 * Important code lines are commented for interview revision.
 */

function throttle<A extends unknown[]>(fn:(...a:A)=>void,ms:number){let last=0;return(...a:A)=>{const now=Date.now();if(now-last>=ms){last=now;fn(...a)}}} const t=throttle((y:number)=>console.log("scrollY",y),100);t(10);t(20);
