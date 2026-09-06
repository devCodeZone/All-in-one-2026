/**
 * INTERVIEW ONE-LINER:
 * Constructor parameter properties declare and initialize class fields in one concise parameter list.
 *
 * RUN: npx tsx src/08_classes_oop/03_Readonly_Parameter_Properties.ts
 * Important code lines are commented for interview revision.
 */

class User{constructor(public readonly id:number,public name:string){}} const u=new User(1,"Sujata"); u.name="Senior"; console.log(u);
