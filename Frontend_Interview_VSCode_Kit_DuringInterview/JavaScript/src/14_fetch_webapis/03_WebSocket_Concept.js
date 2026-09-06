/**
 * INTERVIEW ONE-LINER:
 * WebSocket provides persistent bidirectional client-server communication for frequent real-time messages, with reconnect/backpressure/protocol concerns handled by the application.
 *
 * RUN:
 * node src/14_fetch_webapis/03_WebSocket_Concept.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof WebSocket !== "undefined") {
  console.log("WebSocket available in this runtime.");
} else {
  console.log("Browser/system-design concept: WebSocket is persistent and bidirectional.");
}
