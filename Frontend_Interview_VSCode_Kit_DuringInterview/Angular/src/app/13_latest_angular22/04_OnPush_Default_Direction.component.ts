/**
 * INTERVIEW ONE-LINER: Modern Angular is moving toward zoneless, OnPush-style explicit reactivity so change detection is driven by known notifications rather than ambient async patching.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-onpush-default-direction',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Modern Change Detection Direction</h2>
      <p class="interview-line">Modern Angular is moving toward zoneless, OnPush-style explicit reactivity so change detection is driven by known notifications rather than ambient async patching.</p>
      <div class="card">Signals + stable inputs + explicit notifications + measured performance.</div>
    </div>
  `
})
export class OnPushDirectionDemo {

}
