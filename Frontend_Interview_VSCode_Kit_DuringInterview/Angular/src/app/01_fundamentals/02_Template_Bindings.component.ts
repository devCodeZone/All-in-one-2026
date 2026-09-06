/**
 * INTERVIEW ONE-LINER: Interpolation renders values, property binding sets properties, and event binding handles user actions.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-template-bindings',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Interpolation / Property / Event Binding</h2>
      <p class="interview-line">Interpolation renders values, property binding sets properties, and event binding handles user actions.</p>
      <p>{{ title }}</p><button [disabled]="disabled" (click)="disabled=!disabled">Toggle</button>
    </div>
  `
})
export class TemplateBindingsDemo {
  title='Angular Interview Kit';
  disabled=false;
}
