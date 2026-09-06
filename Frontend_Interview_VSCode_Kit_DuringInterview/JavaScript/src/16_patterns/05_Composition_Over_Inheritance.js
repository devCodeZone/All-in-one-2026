/**
 * INTERVIEW ONE-LINER:
 * Composition combines small behaviors explicitly and often avoids the rigid coupling and fragile hierarchies of deep inheritance.
 *
 * RUN:
 * node src/16_patterns/05_Composition_Over_Inheritance.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const canLog = (state) => ({
  log() {
    console.log(state.name);
  },
});

const canSave = (state) => ({
  save() {
    console.log("saving", state.name);
  },
});

function createDeveloper(name) {
  const state = { name };

  return {
    ...state,
    ...canLog(state),
    ...canSave(state),
  };
}

const dev = createDeveloper("Sujata");
dev.log();
dev.save();
