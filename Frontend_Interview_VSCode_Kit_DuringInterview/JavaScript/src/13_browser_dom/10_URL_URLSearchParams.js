/**
 * INTERVIEW ONE-LINER:
 * URL and URLSearchParams provide standards-based parsing and mutation of URLs instead of manual string concatenation.
 *
 * RUN:
 * node src/13_browser_dom/10_URL_URLSearchParams.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const url = new URL("https://example.com/search?q=javascript&page=1");

url.searchParams.set("page", "2");
url.searchParams.append("tag", "frontend");

console.log(url.toString());
console.log(url.searchParams.get("q"));
