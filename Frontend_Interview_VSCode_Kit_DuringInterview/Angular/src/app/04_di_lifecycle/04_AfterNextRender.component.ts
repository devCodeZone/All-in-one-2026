/**
 * INTERVIEW ONE-LINER: afterNextRender() schedules browser DOM work after Angular completes the next render.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, afterNextRender, signal } from '@angular/core';

@Component({
  selector:'demo-04-afternextrender',
  standalone:true,

  template:`
    <div class="demo">
      <h2>afterNextRender()</h2>
      <p class="interview-line">afterNextRender() schedules browser DOM work after Angular completes the next render.</p>
      <div id="measure-box" class="card">Measured width: {{ width() }}px</div>
    </div>
  `
})
export class AfterNextRenderDemo {
  width=signal(0);
  constructor(){afterNextRender(()=>{const el=document.getElementById('measure-box');this.width.set(Math.round(el?.getBoundingClientRect().width??0));});}
}
