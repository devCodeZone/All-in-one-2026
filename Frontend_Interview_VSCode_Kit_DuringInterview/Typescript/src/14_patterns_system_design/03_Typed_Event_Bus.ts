/**
 * INTERVIEW ONE-LINER:
 * A generic event map makes event names type-safe and links each event to the correct payload shape.
 *
 * RUN: npx tsx src/14_patterns_system_design/03_Typed_Event_Bus.ts
 * Important code lines are commented for interview revision.
 */

type EventMap={login:{userId:number};logout:undefined}; class Bus<E extends Record<PropertyKey,unknown>>{emit<K extends keyof E>(e:K,p:E[K]){console.log(e,p)}} const b=new Bus<EventMap>(); b.emit("login",{userId:1});
