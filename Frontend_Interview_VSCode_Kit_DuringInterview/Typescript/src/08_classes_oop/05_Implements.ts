/**
 * INTERVIEW ONE-LINER:
 * implements verifies that a class satisfies an interface contract without changing runtime behavior.
 *
 * RUN: npx tsx src/08_classes_oop/05_Implements.ts
 * Important code lines are commented for interview revision.
 */

interface Serializable{serialize():string} class Profile implements Serializable{constructor(public name:string){} serialize(){return JSON.stringify({name:this.name})}} console.log(new Profile("Sujata").serialize());
