/**
 * INTERVIEW ONE-LINER:
 * keyof plus generics creates type-safe property access where the key must exist on the object.
 *
 * RUN: npx tsx src/05_generics/03_Keyof_Generic.ts
 * Important code lines are commented for interview revision.
 */

function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{return obj[key];}
const user={id:1,name:"Sujata",active:true}; console.log(getProperty(user,"name"));
