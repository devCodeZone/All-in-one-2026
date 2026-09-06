/**
 * INTERVIEW ONE-LINER: A #templateRef exposes a template element or directive instance locally without querying the document.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-template-reference',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Template Reference Variable</h2>
      <p class="interview-line">A #templateRef exposes a template element or directive instance locally without querying the document.</p>
      <input #box><button (click)="message=box.value">Read</button><p>{{ message }}</p>
    </div>
  `
})
export class TemplateReferenceDemo {
  message='';
}
