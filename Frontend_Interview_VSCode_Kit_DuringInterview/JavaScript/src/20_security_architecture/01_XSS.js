/**
 * INTERVIEW ONE-LINER:
 * Prevent XSS by treating external text as untrusted, preferring textContent/framework escaping, sanitizing trusted-HTML cases, and enforcing CSP where appropriate.
 *
 * RUN:
 * node src/20_security_architecture/01_XSS.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const userInput = `<img src=x onerror="alert(1)">`;

// In browser code, prefer:
// element.textContent = userInput;
// rather than:
// element.innerHTML = userInput;

console.log("Treat as text:", userInput);
