/**
 * INTERVIEW ONE-LINER: linkedSignal() creates writable state that stays linked to a reactive source while still allowing user edits.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, signal, linkedSignal } from '@angular/core';

@Component({
  selector:'demo-04-linkedsignal',
  standalone:true,

  template:`
    <div class="demo">
      <h2>linkedSignal()</h2>
      <p class="interview-line">linkedSignal() creates writable state that stays linked to a reactive source while still allowing user edits.</p>
      <p>Options: {{ options().join(', ') }}</p><p>Selected: {{ selected() }}</p><button (click)="options.set(['Signals','RxJS'])">Replace options</button>
    </div>
  `
})
export class LinkedSignalDemo {
  options=signal(['React','Angular']);
  selected=linkedSignal(()=>this.options()[0]??'None');
}
