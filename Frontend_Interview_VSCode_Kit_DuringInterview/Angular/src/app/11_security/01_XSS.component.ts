/**
 * INTERVIEW ONE-LINER: Angular escapes interpolation and sanitizes risky bindings; bypassSecurityTrust APIs should be rare and security-reviewed.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-01-xss',
  standalone:true,

  template:`
    <div class="demo">
      <h2>XSS / Sanitization</h2>
      <p class="interview-line">Angular escapes interpolation and sanitizes risky bindings; bypassSecurityTrust APIs should be rare and security-reviewed.</p>
      <div class="card">{{ malicious }}</div>
    </div>
  `
})
export class XssDemo {
  malicious=`<img src=x onerror=alert('xss')>`;
}
