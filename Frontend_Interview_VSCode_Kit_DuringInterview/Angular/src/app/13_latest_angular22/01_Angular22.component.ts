/**
 * INTERVIEW ONE-LINER: Angular 22 continues standalone and signal-first Angular with stable Resource/httpResource APIs, Signal Forms, zoneless direction, incremental hydration, and Vitest.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-01-angular22',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Angular 22 Overview</h2>
      <p class="interview-line">Angular 22 continues standalone and signal-first Angular with stable Resource/httpResource APIs, Signal Forms, zoneless direction, incremental hydration, and Vitest.</p>
      <div class="stack"><div class="card">Signals + linkedSignal + Resource</div><div class="card">httpResource / rxResource</div><div class="card">Signal Forms</div><div class="card">Zoneless + OnPush direction</div><div class="card">SSR + incremental hydration + @defer</div><div class="card">Vitest</div></div>
    </div>
  `
})
export class Angular22Demo {

}
