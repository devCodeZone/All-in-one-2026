/**
 * INTERVIEW ONE-LINER:
 * public is externally accessible, protected is class/subclass-only, and private is class-only at compile time.
 *
 * RUN: npx tsx src/08_classes_oop/02_Access_Modifiers.ts
 * Important code lines are commented for interview revision.
 */

class Account{public owner="Sujata";protected balance=1000;private pin=1234;getBalance(){return this.balance}} class Premium extends Account{bonus(){return this.balance*.1}} console.log(new Premium().bonus());
