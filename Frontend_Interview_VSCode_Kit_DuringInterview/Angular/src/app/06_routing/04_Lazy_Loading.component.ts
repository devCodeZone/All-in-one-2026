/**
 * INTERVIEW ONE-LINER: loadComponent/loadChildren create route-level code-splitting boundaries so non-critical features load on demand.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-lazy-loading',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Lazy Loading</h2>
      <p class="interview-line">loadComponent/loadChildren create route-level code-splitting boundaries so non-critical features load on demand.</p>
      <pre>{{ code }}</pre>
    </div>
  `
})
export class LazyLoadingDemo {
  code=`{ path:'admin', loadComponent:()=>import('./admin').then(m=>m.AdminComponent) }`;
}
