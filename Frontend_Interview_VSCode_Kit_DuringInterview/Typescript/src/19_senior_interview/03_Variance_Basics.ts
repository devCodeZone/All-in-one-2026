/**
 * INTERVIEW ONE-LINER:
 * Variance describes how generic compatibility changes with subtype relationships and matters most for callbacks and mutable containers.
 *
 * RUN: npx tsx src/19_senior_interview/03_Variance_Basics.ts
 * Important code lines are commented for interview revision.
 */

type Animal={name:string}; type Dog=Animal&{bark():void}; const dog:Dog={name:"Bruno",bark:()=>console.log("woof")}; const animal:Animal=dog; console.log(animal.name);
