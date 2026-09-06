/**
 * INTERVIEW ONE-LINER:
 * Optimistic UI applies the expected mutation immediately, records previous state, and rolls back or reconciles when the server responds.
 *
 * RUN:
 * node src/21_system_design/02_Optimistic_Update.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


let state = { liked: false, count: 10 };

async function toggleLike(apiCall) {
  const previous = structuredClone(state);

  const nextLiked = !state.liked;
  state = {
    liked: nextLiked,
    count: state.count + (nextLiked ? 1 : -1),
  };

  try {
    await apiCall();
  } catch {
    state = previous;
  }

  return state;
}

console.log(
  await toggleLike(() => Promise.resolve()),
);
