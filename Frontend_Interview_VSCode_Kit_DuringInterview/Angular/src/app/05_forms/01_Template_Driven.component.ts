/**
 * INTERVIEW ONE-LINER: Template-driven forms are concise for simple forms; reactive forms are usually preferred for complex enterprise validation and dynamic structure.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'demo-01-template-driven',
  standalone:true,
  imports:[FormsModule],
  template:`
    <div class="demo">
      <h2>Template-Driven Forms</h2>
      <p class="interview-line">Template-driven forms are concise for simple forms; reactive forms are usually preferred for complex enterprise validation and dynamic structure.</p>
      <input [(ngModel)]="name" required #ctrl="ngModel">@if(ctrl.invalid&&ctrl.touched){<p role="alert">Required</p>}<p>{{ name }}</p>
    </div>
  `
})
export class TemplateDrivenDemo {
  name='';
}
