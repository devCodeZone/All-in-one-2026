/**
 * INTERVIEW ONE-LINER: Angular Router maps URLs to component trees and supports nested routes, parameters, lazy loading, guards, resolvers, and route data.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-01-router-basics',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Router Basics</h2>
      <p class="interview-line">Angular Router maps URLs to component trees and supports nested routes, parameters, lazy loading, guards, resolvers, and route data.</p>
      <pre>{{ code }}</pre>
    </div>
  `
})
export class RouterBasicsDemo {
  code=`{ path: 'users/:id', loadComponent: () => import('./user').then(m=>m.User) }`;
}
