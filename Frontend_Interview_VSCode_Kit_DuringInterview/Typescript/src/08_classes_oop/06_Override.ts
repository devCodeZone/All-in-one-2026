/**
 * INTERVIEW ONE-LINER:
 * The override modifier explicitly marks subclass overrides and noImplicitOverride catches accidental mismatches.
 *
 * RUN: npx tsx src/08_classes_oop/06_Override.ts
 * Important code lines are commented for interview revision.
 */

class Base{log(m:string){console.log("BASE",m)}} class Child extends Base{override log(m:string){console.log("CHILD",m)}} new Child().log("Hello");
