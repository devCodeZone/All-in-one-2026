/**
 * INTERVIEW ONE-LINER:
 * Server-Sent Events provide automatic-reconnecting one-way server-to-browser text streams over HTTP and fit notification/feed-style push updates.
 *
 * RUN:
 * node src/14_fetch_webapis/04_Server_Sent_Events.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


if (typeof EventSource !== "undefined") {
  console.log("EventSource available.");
} else {
  console.log("Browser concept: SSE = server → client stream; WebSocket = bidirectional.");
}
