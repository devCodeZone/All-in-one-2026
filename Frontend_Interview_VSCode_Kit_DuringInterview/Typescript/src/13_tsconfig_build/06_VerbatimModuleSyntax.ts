/**
 * INTERVIEW ONE-LINER:
 * verbatimModuleSyntax keeps module emit predictable and makes type-only imports explicit.
 *
 * RUN: npx tsx src/13_tsconfig_build/06_VerbatimModuleSyntax.ts
 * Important code lines are commented for interview revision.
 */

type User={id:number}; const u:User={id:1}; console.log(u); // Prefer: import type { User } from "./types"
