/**
 * INTERVIEW ONE-LINER: Keep state as local as possible; promote it only when multiple distant consumers or cross-route workflows justify shared state.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-01-state-scope',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Local vs Global State</h2>
      <p class="interview-line">Keep state as local as possible; promote it only when multiple distant consumers or cross-route workflows justify shared state.</p>
      <div class="stack"><div class="card">Local UI → component signal</div><div class="card">Shared feature → service/store</div><div class="card">Server state → resource/cache layer</div></div>
    </div>
  `
})
export class StateScopeDemo {

}
