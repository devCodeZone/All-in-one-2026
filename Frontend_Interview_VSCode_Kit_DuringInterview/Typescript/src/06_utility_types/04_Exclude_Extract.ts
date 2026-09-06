/**
 * INTERVIEW ONE-LINER:
 * Exclude removes matching union members while Extract keeps only matching members.
 *
 * RUN: npx tsx src/06_utility_types/04_Exclude_Extract.ts
 * Important code lines are commented for interview revision.
 */

type Event="click"|"focus"|"submit"|404; type Strings=Extract<Event,string>; type NonSubmit=Exclude<Strings,"submit">; const e:NonSubmit="click"; console.log(e);
