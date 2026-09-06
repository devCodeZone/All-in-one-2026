/**
 * INTERVIEW ONE-LINER:
 * typeof captures a value type and keyof turns an object type into a union of its property names.
 *
 * RUN: npx tsx src/07_advanced_types/01_Keyof_Typeof.ts
 * Important code lines are commented for interview revision.
 */

const config={apiUrl:"/api",timeout:5000,retry:true}; type Config=typeof config; type Key=keyof Config; function read(k:Key){return config[k]} console.log(read("apiUrl"));
