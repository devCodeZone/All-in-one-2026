/**
 * INTERVIEW ONE-LINER: Lifecycle hooks align code with component creation, input changes, view initialization, checks, and destruction.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector:'demo-02-lifecycle-hooks',
  standalone:true,

  template:`
    <div class="demo">
      <h2>Lifecycle Hooks</h2>
      <p class="interview-line">Lifecycle hooks align code with component creation, input changes, view initialization, checks, and destruction.</p>
      <p>Open console to see lifecycle calls.</p>
    </div>
  `
})
export class LifecycleHooksDemo {
  ngOnInit(){console.log('ngOnInit');}
  ngAfterViewInit(){console.log('ngAfterViewInit');}
  ngOnDestroy(){console.log('ngOnDestroy');}
}
