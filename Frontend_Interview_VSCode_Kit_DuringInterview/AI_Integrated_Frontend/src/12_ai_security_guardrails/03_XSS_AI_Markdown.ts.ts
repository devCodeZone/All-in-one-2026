/**
 * INTERVIEW ONE-LINER:
 * AI-generated Markdown/HTML must be treated as untrusted content; sanitize HTML and prefer safe renderers instead of directly assigning innerHTML.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


const modelText = `<img src=x onerror="alert('xss')">`;

// Unsafe browser pattern:
// element.innerHTML = modelText;

// Safer default:
// element.textContent = modelText;
// Or use a Markdown renderer configured to sanitize/disable raw HTML.

console.log("Render AI text safely:", modelText);
