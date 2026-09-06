/**
 * INTERVIEW ONE-LINER:
 * Mapped types can remap keys with as, enabling transformations such as generating getter names.
 *
 * RUN: npx tsx src/07_advanced_types/08_Key_Remap.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number;name:string}; type Getters<T>={[K in keyof T as `get${Capitalize<string&K>}`]:()=>T[K]}; const g:Getters<User>={getId:()=>1,getName:()=>"Sujata"}; console.log(g.getName());
