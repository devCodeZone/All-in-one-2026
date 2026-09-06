/**
 * INTERVIEW ONE-LINER: DestroyRef registers cleanup with the current injection context and reduces manual ngOnDestroy boilerplate.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector:'demo-03-destroyref',
  standalone:true,

  template:`
    <div class="demo">
      <h2>DestroyRef</h2>
      <p class="interview-line">DestroyRef registers cleanup with the current injection context and reduces manual ngOnDestroy boilerplate.</p>
      <p>Ticks: {{ ticks() }}</p>
    </div>
  `
})
export class DestroyRefDemo {
  ticks=signal(0);
  private destroyRef=inject(DestroyRef);
  constructor(){const id=setInterval(()=>this.ticks.update(v=>v+1),1000);this.destroyRef.onDestroy(()=>clearInterval(id));}
}
