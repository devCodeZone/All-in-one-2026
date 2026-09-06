/**
 * INTERVIEW ONE-LINER:
 * Recursive types reference themselves and model trees, menus, JSON-like structures, and schemas.
 *
 * RUN: npx tsx src/07_advanced_types/09_Recursive_Types.ts
 * Important code lines are commented for interview revision.
 */

type Tree<T>={value:T;children?:Tree<T>[]}; const t:Tree<string>={value:"root",children:[{value:"child"}]}; console.log(t);
