/**
 * INTERVIEW ONE-LINER:
 * Record<K,V> creates an object type whose known keys map to a consistent value type.
 *
 * RUN: npx tsx src/06_utility_types/03_Record.ts
 * Important code lines are commented for interview revision.
 */

type Env="dev"|"stage"|"prod"; const urls:Record<Env,string>={dev:"localhost",stage:"stage",prod:"prod"}; console.log(urls.prod);
