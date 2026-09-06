/**
 * INTERVIEW ONE-LINER:
 * Use if/else for general branching, switch for discrete cases, and ternary for compact value selection.
 *
 * RUN:
 * node src/03_control_flow/01_If_Switch_Ternary.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const status = "success";

if (status === "loading") {
  console.log("Loading");
} else if (status === "success") {
  console.log("Done");
} else {
  console.log("Unknown");
}

switch (status) {
  case "success":
    console.log("switch: done");
    break;
  default:
    console.log("switch: other");
}

const label = status === "success" ? "Green" : "Gray";
console.log(label);
