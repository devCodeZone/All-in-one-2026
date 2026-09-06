/**
 * INTERVIEW ONE-LINER: OnPush reduces unnecessary checks by relying on explicit reactive notifications, input reference changes, events, and signals.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector:'demo-01-onpush',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  template:`
    <div class="demo">
      <h2>OnPush Change Detection</h2>
      <p class="interview-line">OnPush reduces unnecessary checks by relying on explicit reactive notifications, input reference changes, events, and signals.</p>
      <button (click)="count.update(v=>v+1)">Count {{ count() }}</button>
    </div>
  `
})
export class OnPushDemo {
  count=signal(0);
}
