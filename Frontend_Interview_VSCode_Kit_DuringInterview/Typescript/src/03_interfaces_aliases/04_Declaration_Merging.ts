/**
 * INTERVIEW ONE-LINER:
 * Interfaces with the same name merge declarations, useful for augmentation but best used deliberately.
 *
 * RUN: npx tsx src/03_interfaces_aliases/04_Declaration_Merging.ts
 * Important code lines are commented for interview revision.
 */

interface Settings{theme:"light"|"dark"}
interface Settings{language:string}
const s:Settings={theme:"dark",language:"en"}; console.log(s);
