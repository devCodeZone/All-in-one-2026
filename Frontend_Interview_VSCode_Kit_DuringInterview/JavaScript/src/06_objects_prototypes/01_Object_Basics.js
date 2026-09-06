/**
 * INTERVIEW ONE-LINER:
 * Objects are mutable key-value collections whose property keys are strings or symbols and whose behavior is influenced by descriptors and prototypes.
 *
 * RUN:
 * node src/06_objects_prototypes/01_Object_Basics.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const user = {
  id: 1,
  name: "Sujata",
  active: true,
};

user.role = "Senior Frontend Developer";
delete user.active;

console.log(user.name, user["role"], user);
