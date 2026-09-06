/**
 * INTERVIEW ONE-LINER: Optimistic UI updates local state immediately, then reconciles server success or rolls back captured previous state on failure.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-06-optimistic-ui',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Optimistic UI</h2>
      <p class="interview-line">Optimistic UI updates local state immediately, then reconciles server success or rolls back captured previous state on failure.</p>
      <pre>Click → optimistic state → mutation → success keep / error rollback</pre>
    </div>
  `
})
export class OptimisticConceptDemo {

}
