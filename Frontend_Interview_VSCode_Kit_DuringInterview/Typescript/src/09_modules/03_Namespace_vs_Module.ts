/**
 * INTERVIEW ONE-LINER:
 * ES modules are preferred for modern code; namespaces mainly remain for legacy/global-script scenarios.
 *
 * RUN: npx tsx src/09_modules/03_Namespace_vs_Module.ts
 * Important code lines are commented for interview revision.
 */

namespace Legacy{export function upper(v:string){return v.toUpperCase()}} console.log(Legacy.upper("legacy"));
