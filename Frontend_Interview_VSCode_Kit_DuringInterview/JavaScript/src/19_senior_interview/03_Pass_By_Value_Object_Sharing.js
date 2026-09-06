/**
 * INTERVIEW ONE-LINER:
 * JavaScript always passes values; for objects that value is a reference-like pointer, so functions can mutate the same object but cannot replace the caller's binding.
 *
 * RUN:
 * node src/19_senior_interview/03_Pass_By_Value_Object_Sharing.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function update(obj) {
  obj.name = "Changed";       // mutates shared object.
  obj = { name: "Replaced" }; // only reassigns local parameter.
}

const user = { name: "Original" };
update(user);

console.log(user); // { name: "Changed" }
