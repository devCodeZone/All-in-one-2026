/**
 * INTERVIEW ONE-LINER: Zoneless change detection removes Zone.js dependency and relies on explicit Angular notifications such as signals, events, async bindings, and framework APIs.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-zoneless',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Zoneless Angular</h2>
      <p class="interview-line">Zoneless change detection removes Zone.js dependency and relies on explicit Angular notifications such as signals, events, async bindings, and framework APIs.</p>
      <div class="card">Think: explicit reactive notifications instead of zone-wide async patching.</div>
    </div>
  `
})
export class ZonelessDemo {

}
