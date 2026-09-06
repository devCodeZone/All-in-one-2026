/**
 * INTERVIEW ONE-LINER: NgRx is useful for complex event-driven global state; know Store, Actions, Reducers, Selectors, Effects, and when a simpler signal service is enough.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-ngrx-awareness',
  standalone:true,

  template:`
    <div class="demo">
      <h2>NgRx / Store Awareness</h2>
      <p class="interview-line">NgRx is useful for complex event-driven global state; know Store, Actions, Reducers, Selectors, Effects, and when a simpler signal service is enough.</p>
      <pre>Component → Action → Reducer → Store → Selector
                 ↘ Effect → API</pre>
    </div>
  `
})
export class NgrxAwarenessDemo {

}
