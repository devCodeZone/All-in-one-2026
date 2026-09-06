/**
 * INTERVIEW ONE-LINER:
 * tsconfig defines project boundaries/compiler behavior; senior developers should know target, module, resolution, strictness, libs, and emit.
 *
 * RUN: npx tsx src/13_tsconfig_build/01_TSConfig_Core.ts
 * Important code lines are commented for interview revision.
 */

console.log({target:"ES2025",module:"ESNext",moduleResolution:"Bundler",strict:true,rootDir:"./src",outDir:"./dist"});
