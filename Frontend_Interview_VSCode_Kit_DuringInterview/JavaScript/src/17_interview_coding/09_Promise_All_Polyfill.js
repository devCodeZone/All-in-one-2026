/**
 * INTERVIEW ONE-LINER:
 * A Promise.all-style implementation preserves input order, resolves when every input fulfills, and rejects immediately on the first rejection.
 *
 * RUN:
 * node src/17_interview_coding/09_Promise_All_Polyfill.js
 *
 * NOTE:
 * Important statements are explained inline so this file can be used for
 * revision, live coding practice, and interview screen-sharing.
 */


function promiseAll(iterable) {
  const values = Array.from(iterable);

  return new Promise((resolve, reject) => {
    if (values.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(values.length);
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value).then(
        (result) => {
          results[index] = result;
          completed += 1;

          if (completed === values.length) {
            resolve(results);
          }
        },
        reject,
      );
    });
  });
}

console.log(await promiseAll([Promise.resolve(1), 2, Promise.resolve(3)]));
