/**
 * INTERVIEW ONE-LINER: An accessible modal needs focus trap, Escape/overlay close, focus restoration, scroll lock, stacking strategy, and dialog ARIA.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-modal',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Modal/Dialog</h2>
      <p class="interview-line">An accessible modal needs focus trap, Escape/overlay close, focus restoration, scroll lock, stacking strategy, and dialog ARIA.</p>
      <div class="card">Portal/overlay strategy + focus management + keyboard + ARIA</div>
    </div>
  `
})
export class ModalConceptDemo {

}
