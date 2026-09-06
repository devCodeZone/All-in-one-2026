/**
 * INTERVIEW ONE-LINER:
 * JSON.parse converts JSON text to values and JSON.stringify serializes JSON-compatible values with optional reviver/replacer hooks.
 *
 * RUN:
 * node src/12_regex_json_date/04_JSON_Parse_Stringify.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const text = '{"id":1,"name":"Sujata","created":"2026-09-05"}';

const parsed = JSON.parse(text, (key, value) => {
  // Reviver can transform selected fields during parsing.
  if (key === "created") return new Date(value);
  return value;
});

const serialized = JSON.stringify(parsed, ["id", "name"], 2);

console.log(parsed.created instanceof Date);
console.log(serialized);
