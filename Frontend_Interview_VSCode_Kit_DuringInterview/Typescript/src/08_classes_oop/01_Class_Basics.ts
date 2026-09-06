/**
 * INTERVIEW ONE-LINER:
 * TypeScript classes add typed fields, constructors, methods, and compile-time contracts on top of JavaScript classes.
 *
 * RUN: npx tsx src/08_classes_oop/01_Class_Basics.ts
 * Important code lines are commented for interview revision.
 */

class Developer{constructor(public name:string,public years:number){} describe(){return`${this.name}: ${this.years} years`;}} console.log(new Developer("Sujata",10).describe());
