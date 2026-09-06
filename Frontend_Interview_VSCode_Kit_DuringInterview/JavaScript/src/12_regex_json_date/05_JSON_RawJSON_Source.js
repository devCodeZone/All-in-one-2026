/**
 * INTERVIEW ONE-LINER:
 * ES2026 adds JSON.rawJSON plus reviver source context, enabling finer control over primitive serialization and access to original JSON source text.
 *
 * RUN:
 * node src/12_regex_json_date/05_JSON_RawJSON_Source.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof JSON.rawJSON === "function") {
  const value = {
    precise: JSON.rawJSON("12345678901234567890"),
  };

  console.log(JSON.stringify(value));
} else {
  console.log("JSON.rawJSON is ES2026; runtime may not support it yet.");
}

// The ES2026 reviver context argument is best feature-tested in the target runtime.
