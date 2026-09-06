/**
 * INTERVIEW ONE-LINER:
 * A production typeahead combines debounce, cancellation/latest-wins, caching, loading/error state, keyboard navigation, and accessible combobox semantics.
 *
 * RUN:
 * node src/21_system_design/01_Typeahead_Core.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function createTypeahead(searchFn, delayMs = 250) {
  let timer;
  let requestId = 0;

  return (query) =>
    new Promise((resolve) => {
      clearTimeout(timer);

      timer = setTimeout(async () => {
        const id = ++requestId;
        const result = await searchFn(query);

        // Ignore data from an older request.
        resolve(id === requestId ? result : []);
      }, delayMs);
    });
}

const search = createTypeahead(async (query) =>
  ["React", "Angular", "JavaScript"].filter((x) =>
    x.toLowerCase().includes(query.toLowerCase()),
  ),
);

console.log(await search("java"));
