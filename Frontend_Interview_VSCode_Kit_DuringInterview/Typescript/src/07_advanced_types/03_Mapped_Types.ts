/**
 * INTERVIEW ONE-LINER:
 * Mapped types iterate over property keys to systematically transform an existing object type.
 *
 * RUN: npx tsx src/07_advanced_types/03_Mapped_Types.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;name:string;active:boolean}; type Nullable<T>={[K in keyof T]:T[K]|null}; const u:Nullable<User>={id:null,name:null,active:null}; console.log(u);
