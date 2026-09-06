/**
 * INTERVIEW ONE-LINER:
 * Template literal types build string unions and are powerful for event names, routes, and component APIs.
 *
 * RUN: npx tsx src/07_advanced_types/07_Template_Literal_Types.ts
 * Important code lines are commented for interview revision.
 */

type Entity="user"|"order"; type Action="created"|"updated"; type EventName=`${Entity}:${Action}`; const e:EventName="user:created"; console.log(e);
