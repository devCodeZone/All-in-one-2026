/**
 * INTERVIEW ONE-LINER: effect() runs side-effect logic when signal dependencies change; use computed() instead for ordinary derived state.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, signal, effect } from '@angular/core';

@Component({
  selector:'demo-03-effect',
  standalone:true,

  template:`
    <div class="demo">
      <h2>effect()</h2>
      <p class="interview-line">effect() runs side-effect logic when signal dependencies change; use computed() instead for ordinary derived state.</p>
      <button (click)="count.update(v=>v+1)">Count {{ count() }}</button><p>Open console.</p>
    </div>
  `
})
export class EffectDemo {
  count=signal(0);
  constructor(){ effect(()=>console.log('count',this.count())); }
}
