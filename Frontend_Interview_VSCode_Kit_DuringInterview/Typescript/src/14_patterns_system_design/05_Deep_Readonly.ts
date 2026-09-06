/**
 * INTERVIEW ONE-LINER:
 * Recursive mapped types can express deep immutability, though runtime freezing is separate.
 *
 * RUN: npx tsx src/14_patterns_system_design/05_Deep_Readonly.ts
 * Important code lines are commented for interview revision.
 */

type DeepReadonly<T>=T extends (...a:any[])=>any?T:T extends object?{readonly[K in keyof T]:DeepReadonly<T[K]>}:T; type Config={api:{url:string;retry:number}}; const c:DeepReadonly<Config>={api:{url:"/api",retry:3}}; console.log(c);
