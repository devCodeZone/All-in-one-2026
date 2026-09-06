/**
 * INTERVIEW ONE-LINER:
 * fetch returns a Promise for an HTTP Response; HTTP 4xx/5xx do not automatically reject, so check response.ok explicitly.
 *
 * RUN:
 * node src/14_fetch_webapis/01_Fetch.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


async function loadExample() {
  try {
    const response = await fetch("data:text/plain,hello");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("request failed:", error);
    return null;
  }
}

console.log(await loadExample());
