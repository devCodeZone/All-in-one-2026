/**
 * INTERVIEW ONE-LINER: [(ngModel)] combines property and event binding for simple two-way form state.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'demo-03-two-way-binding',
  standalone:true,
  imports:[FormsModule],
  template:`
    <div class="demo">
      <h2>Two-Way Binding</h2>
      <p class="interview-line">[(ngModel)] combines property and event binding for simple two-way form state.</p>
      <input [(ngModel)]="name"><p>Hello {{ name }}</p>
    </div>
  `
})
export class TwoWayBindingDemo {
  name='Angular';
}
