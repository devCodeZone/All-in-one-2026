/**
 * INTERVIEW ONE-LINER:
 * Angular AI suggestions can use debounceTime plus switchMap so only the latest query drives results and obsolete requests are unsubscribed.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { Subject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";

const queries$ = new Subject<string>();

const results$ = queries$.pipe(
  debounceTime(300),        // Wait for typing to pause.
  distinctUntilChanged(),   // Skip repeated identical prompts.
  switchMap((query) =>      // Cancel/unsubscribe the prior inner request.
    fetch(`/api/ai-suggest?q=${encodeURIComponent(query)}`)
      .then((response) => response.json())
  )
);

results$.subscribe(console.log);
