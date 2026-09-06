/**
 * INTERVIEW ONE-LINER:
 * Web Workers move CPU-heavy JavaScript off the main thread and communicate through message passing rather than shared DOM access.
 *
 * RUN:
 * node src/14_fetch_webapis/05_Web_Worker_Concept.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const workerMentalModel = {
  mainThread: "DOM + user interaction",
  worker: "CPU-heavy computation",
  communication: "postMessage / structured clone / transferable objects",
};

console.log(workerMentalModel);
