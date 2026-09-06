/**
 * INTERVIEW ONE-LINER:
 * Date stores a timestamp in milliseconds and has legacy parsing/time-zone quirks, so use explicit ISO data and Intl for presentation.
 *
 * RUN:
 * node src/12_regex_json_date/06_Date_Basics.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const now = new Date();
const explicitUtc = new Date("2026-09-05T12:00:00Z");

console.log(now.toISOString());
console.log(explicitUtc.getTime());
