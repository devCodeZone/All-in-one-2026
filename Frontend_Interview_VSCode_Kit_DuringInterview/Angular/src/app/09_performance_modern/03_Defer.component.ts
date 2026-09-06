/**
 * INTERVIEW ONE-LINER: @defer lazily loads template dependencies based on triggers such as viewport, interaction, idle, timer, or a condition.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-03-defer',
  standalone:true,

  template:`
    <div class="demo">
      <h2>@defer</h2>
      <p class="interview-line">@defer lazily loads template dependencies based on triggers such as viewport, interaction, idle, timer, or a condition.</p>
      @defer(on interaction(trigger)){<div class="card">Deferred content loaded.</div>}@placeholder{<button #trigger>Load deferred content</button>}
    </div>
  `
})
export class DeferDemo {

}
