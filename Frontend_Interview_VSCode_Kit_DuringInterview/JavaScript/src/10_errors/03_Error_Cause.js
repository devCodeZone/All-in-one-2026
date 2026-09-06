/**
 * INTERVIEW ONE-LINER:
 * The Error cause option preserves the original failure while wrapping it with higher-level context.
 *
 * RUN:
 * node src/10_errors/03_Error_Cause.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


try {
  try {
    throw new Error("Database connection failed");
  } catch (cause) {
    throw new Error("Could not load profile", { cause });
  }
} catch (error) {
  console.log(error.message);
  console.log("cause:", error.cause?.message);
}
