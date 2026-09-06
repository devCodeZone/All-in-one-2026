/**
 * INTERVIEW ONE-LINER:
 * Tagged templates pass literal segments and expression values to a function, enabling custom escaping, localization, and DSL-style APIs.
 *
 * RUN:
 * node src/02_strings/03_Tagged_Templates.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function safe(strings, ...values) {
  // Escape a few HTML-significant characters in interpolated values.
  const escape = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

  return strings.reduce(
    (result, part, index) => result + part + (index < values.length ? escape(values[index]) : ""),
    "",
  );
}

const input = "<script>alert(1)</script>";
console.log(safe`User entered: ${input}`);
