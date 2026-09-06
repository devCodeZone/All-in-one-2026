/**
 * INTERVIEW ONE-LINER:
 * try/catch handles thrown exceptions and finally runs cleanup regardless of success or failure.
 *
 * RUN:
 * node src/10_errors/01_Try_Catch_Finally.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function parse(value) {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error("Invalid JSON:", error.message);
    return null;
  } finally {
    console.log("parse attempt finished");
  }
}

console.log(parse('{"ok":true}'));
