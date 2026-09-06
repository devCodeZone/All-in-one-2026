/**
 * INTERVIEW ONE-LINER: A multi-step form centralizes shared state, validates per step, persists drafts appropriately, and avoids insecure sensitive-data persistence.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-08-form-wizard',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Multi-Step Form</h2>
      <p class="interview-line">A multi-step form centralizes shared state, validates per step, persists drafts appropriately, and avoids insecure sensitive-data persistence.</p>
      <pre>Step UI → shared form model → step validation → review → submit</pre>
    </div>
  `
})
export class FormWizardConceptDemo {

}
