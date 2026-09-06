/**
 * INTERVIEW ONE-LINER:
 * Intl provides locale-aware formatting for numbers, dates, lists, relative time, plural rules, segments, and more.
 *
 * RUN:
 * node src/12_regex_json_date/07_Intl.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


const amount = 123456.78;

console.log(
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount),
);

console.log(
  new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
  }).format(new Date()),
);
