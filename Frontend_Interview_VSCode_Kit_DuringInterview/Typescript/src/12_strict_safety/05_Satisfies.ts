/**
 * INTERVIEW ONE-LINER:
 * satisfies validates a value against a target type while preserving the value’s more specific inferred type.
 *
 * RUN: npx tsx src/12_strict_safety/05_Satisfies.ts
 * Important code lines are commented for interview revision.
 */

type Route={path:string;secure:boolean}; const routes={home:{path:"/",secure:false},admin:{path:"/admin",secure:true}} satisfies Record<string,Route>; type Name=keyof typeof routes; const n:Name="admin"; console.log(n,routes.admin.path);
