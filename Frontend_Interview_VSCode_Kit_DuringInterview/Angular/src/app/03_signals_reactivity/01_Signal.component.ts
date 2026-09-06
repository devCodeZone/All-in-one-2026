/**
 * INTERVIEW ONE-LINER: signal() stores fine-grained reactive state; set/update notify only consumers that depend on it.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, signal } from '@angular/core';

@Component({
  selector:'demo-01-signal',
  standalone:true,

  template:`
    <div class="demo">
      <h2>signal()</h2>
      <p class="interview-line">signal() stores fine-grained reactive state; set/update notify only consumers that depend on it.</p>
      <p>Count: {{ count() }}</p><button (click)="count.update(v=>v+1)">Increment</button>
    </div>
  `
})
export class SignalDemo {
  count=signal(0);
}
