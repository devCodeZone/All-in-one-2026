/**
 * INTERVIEW ONE-LINER:
 * JavaScript's inheritance model is prototype-based; class syntax provides clearer constructor/inheritance/private-field syntax over that model.
 *
 * RUN:
 * node src/19_senior_interview/07_Prototype_vs_Class.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


class User {
  greet() {
    return "hello";
  }
}

const user = new User();

console.log(Object.getPrototypeOf(user) === User.prototype);
console.log(Object.hasOwn(user, "greet")); // false: method lives on prototype.
