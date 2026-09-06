/**
 * INTERVIEW ONE-LINER:
 * Property lookup walks an object's prototype chain until a matching property is found or the chain ends at null.
 *
 * RUN:
 * node src/06_objects_prototypes/06_Prototype_Chain.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const animal = {
  breathe() {
    return "breathing";
  },
};

const dog = Object.create(animal);
dog.name = "Bruno";

console.log(dog.name);          // own property.
console.log(dog.breathe());     // inherited through prototype.
console.log(Object.getPrototypeOf(dog) === animal);
