/**
 * INTERVIEW ONE-LINER: CSP reduces script injection impact, while CSRF/XSRF protections prevent authenticated cross-site state-changing requests.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-03-csp-csrf',
  standalone:true,

  template:`
    <div class="demo">
      <h2>CSP + CSRF/XSRF</h2>
      <p class="interview-line">CSP reduces script injection impact, while CSRF/XSRF protections prevent authenticated cross-site state-changing requests.</p>
      <div class="card">CSP → constrain executable sources • XSRF token → validate state-changing requests</div>
    </div>
  `
})
export class CspCsrfDemo {

}
