/**
 * INTERVIEW ONE-LINER: HttpClient returns Observables and integrates with interceptors, typed responses, XSRF support, and Angular HTTP testing utilities.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, signal } from '@angular/core';

@Component({
  selector:'demo-01-httpclient',
  standalone:true,

  template:`
    <div class="demo">
      <h2>HttpClient</h2>
      <p class="interview-line">HttpClient returns Observables and integrates with interceptors, typed responses, XSRF support, and Angular HTTP testing utilities.</p>
      <button (click)="load()">Mock Load</button><p>{{ status() }}</p>
    </div>
  `
})
export class HttpClientDemo {
  status=signal('idle');
  load(){this.status.set('success (replace with service HttpClient call)');}
}
