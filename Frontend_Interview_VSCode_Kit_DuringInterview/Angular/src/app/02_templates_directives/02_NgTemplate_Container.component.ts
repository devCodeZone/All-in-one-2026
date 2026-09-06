/**
 * INTERVIEW ONE-LINER: ng-template defines template fragments while ng-container groups structure without adding a DOM element.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-02-ngtemplate-container',
  standalone:true,

  template:`
    <div class="demo">
      <h2>ng-template / ng-container</h2>
      <p class="interview-line">ng-template defines template fragments while ng-container groups structure without adding a DOM element.</p>
      <ng-container><span>Container adds no wrapper DOM.</span></ng-container><ng-template #tpl><div class="card">Reusable template fragment</div></ng-template>
    </div>
  `
})
export class TemplateContainerDemo {

}
