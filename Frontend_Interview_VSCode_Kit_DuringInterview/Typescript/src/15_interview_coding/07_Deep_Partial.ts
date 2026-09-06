/**
 * INTERVIEW ONE-LINER:
 * DeepPartial recursively makes nested properties optional and is useful for patches, fixtures, and test builders.
 *
 * RUN: npx tsx src/15_interview_coding/07_Deep_Partial.ts
 * Important code lines are commented for interview revision.
 */

type DeepPartial<T>=T extends object?{[K in keyof T]?:DeepPartial<T[K]>}:T; type Profile={name:string;address:{city:string;pin:number}}; const patch:DeepPartial<Profile>={address:{city:"Gurugram"}}; console.log(patch);
