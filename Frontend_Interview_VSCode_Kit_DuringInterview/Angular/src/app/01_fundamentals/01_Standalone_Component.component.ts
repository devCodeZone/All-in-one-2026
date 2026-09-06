/**
 * INTERVIEW ONE-LINER: Standalone components declare their own dependencies and are the default modern Angular building block, reducing NgModule ceremony.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-01-standalone-component',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Standalone Component</h2>
      <p class="interview-line">Standalone components declare their own dependencies and are the default modern Angular building block, reducing NgModule ceremony.</p>
      <div class="card">This file is a standalone component.</div>
    </div>
  `
})
export class StandaloneComponentDemo {

}
