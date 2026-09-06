/**
 * INTERVIEW ONE-LINER:
 * ES2026 Uint8Array helpers convert binary bytes to and from base64 and hexadecimal strings without manual browser/Node-specific glue.
 *
 * RUN:
 * node src/18_es2025_es2026_latest/04_Uint8Array_Base64_Hex.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const bytes = new Uint8Array([72, 105]); // "Hi"

if (typeof bytes.toHex === "function") {
  console.log("hex:", bytes.toHex());
} else {
  console.log("toHex is ES2026; fallback:", Buffer.from(bytes).toString("hex"));
}

if (typeof bytes.toBase64 === "function") {
  console.log("base64:", bytes.toBase64());
} else {
  console.log("toBase64 is ES2026; fallback:", Buffer.from(bytes).toString("base64"));
}
