/**
 * INTERVIEW ONE-LINER: Incremental hydration keeps selected server-rendered regions dehydrated and hydrates them only when configured triggers fire.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-06-incremental-hydration',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Incremental Hydration</h2>
      <p class="interview-line">Incremental hydration keeps selected server-rendered regions dehydrated and hydrates them only when configured triggers fire.</p>
      <pre>@defer (hydrate on interaction) {
  &lt;heavy-widget /&gt;
}</pre>
    </div>
  `
})
export class IncrementalHydrationDemo {

}
