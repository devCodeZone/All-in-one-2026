/**
 * INTERVIEW ONE-LINER:
 * Immutability means creating new state instead of mutating existing state, which improves predictability and change detection but may increase allocation cost.
 *
 * RUN:
 * node src/19_senior_interview/04_Immutability.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const user = {
  id: 1,
  profile: { name: "Sujata" },
};

const updated = {
  ...user,
  profile: {
    ...user.profile,
    name: "Senior Developer",
  },
};

console.log(user.profile.name);
console.log(updated.profile.name);
