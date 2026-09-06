/**
 * INTERVIEW ONE-LINER:
 * Decorators are metaprogramming hooks; understand whether your framework uses legacy experimental decorators or standard ECMAScript decorators.
 *
 * RUN: npx tsx src/18_decorators_declarations/01_Decorator_Concept.ts
 * Important code lines are commented for interview revision.
 */

function logged<T extends new(...a:any[])=>object>(Base:T){return class extends Base{createdAt=new Date()}}
@logged class Service{name="DemoService"}
console.log(new Service());
