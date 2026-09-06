/**
 * INTERVIEW ONE-LINER:
 * Template literal types can make route builders type-safe and reduce hard-coded path mistakes.
 *
 * RUN: npx tsx src/14_patterns_system_design/07_Typed_Routes.ts
 * Important code lines are commented for interview revision.
 */

type Routes={user:`/users/${number}`;order:`/orders/${string}`}; function route<K extends keyof Routes>(name:K,value:Routes[K]){console.log(name,value);return value} route("user","/users/42");
