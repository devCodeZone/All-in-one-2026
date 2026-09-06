/**
 * INTERVIEW ONE-LINER: computed() creates a cached read-only value derived from signals and recalculates only when dependencies change.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, signal, computed } from '@angular/core';

@Component({
  selector:'demo-02-computed',
  standalone:true,

  template:`
    <div class="demo">
      <h2>computed()</h2>
      <p class="interview-line">computed() creates a cached read-only value derived from signals and recalculates only when dependencies change.</p>
      <p>{{ fullName() }}</p><button (click)="first.set('Senior')">Change</button>
    </div>
  `
})
export class ComputedDemo {
  first=signal('Angular');
  last=signal('Developer');
  fullName=computed(()=>`${this.first()} ${this.last()}`);
}
