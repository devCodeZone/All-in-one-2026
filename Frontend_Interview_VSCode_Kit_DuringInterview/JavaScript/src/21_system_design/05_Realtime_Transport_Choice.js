/**
 * INTERVIEW ONE-LINER:
 * Choose polling, SSE, or WebSocket based on freshness, direction, frequency, infrastructure, reconnect behavior, and consistency requirements.
 *
 * RUN:
 * node src/21_system_design/05_Realtime_Transport_Choice.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const transport = [
  { name: "Polling", fit: "Simple periodic refresh" },
  { name: "SSE", fit: "One-way server push" },
  { name: "WebSocket", fit: "Frequent bidirectional messages" },
];

console.table(transport);
