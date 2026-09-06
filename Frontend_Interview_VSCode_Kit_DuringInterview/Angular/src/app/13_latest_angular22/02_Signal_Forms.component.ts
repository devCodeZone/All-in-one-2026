/**
 * INTERVIEW ONE-LINER: Signal Forms are Angular’s modern signal-native approach to form state and can interoperate with existing reactive-form code during migration.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-signal-forms',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Signal Forms</h2>
      <p class="interview-line">Signal Forms are Angular’s modern signal-native approach to form state and can interoperate with existing reactive-form code during migration.</p>
      <pre>Signal model → field/form state → validation → template bindings

Keep Reactive Forms knowledge too: enterprise codebases will use both.</pre>
    </div>
  `
})
export class SignalFormsDemo {

}
