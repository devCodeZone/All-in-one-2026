/**
 * INTERVIEW ONE-LINER: Micro frontends split a large UI into independently owned domains, trading team autonomy for integration and consistency complexity.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-12-micro-frontends',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Micro Frontends</h2>
      <p class="interview-line">Micro frontends split a large UI into independently owned domains, trading team autonomy for integration and consistency complexity.</p>
      <pre>Shell → Checkout domain / Profile domain / Shared contracts</pre>
    </div>
  `
})
export class MicroFrontendsDemo {

}
