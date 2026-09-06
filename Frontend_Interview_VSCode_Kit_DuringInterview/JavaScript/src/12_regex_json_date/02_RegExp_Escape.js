/**
 * INTERVIEW ONE-LINER:
 * RegExp.escape safely escapes user text before embedding it into a dynamically constructed regular expression.
 *
 * RUN:
 * node src/12_regex_json_date/02_RegExp_Escape.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const userText = "hello.world";

if (typeof RegExp.escape === "function") {
  const pattern = new RegExp(RegExp.escape(userText));
  console.log(pattern.test("say hello.world now"));
} else {
  console.log("RegExp.escape is ES2025; runtime may not support it yet.");
}
