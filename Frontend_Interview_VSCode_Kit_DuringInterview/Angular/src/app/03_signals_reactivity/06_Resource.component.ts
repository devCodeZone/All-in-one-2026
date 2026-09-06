/**
 * INTERVIEW ONE-LINER: resource() manages asynchronous read state with signals and exposes value, loading, error, and status.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component, signal, resource } from '@angular/core';

@Component({
  selector:'demo-06-resource',
  standalone:true,

  template:`
    <div class="demo">
      <h2>resource()</h2>
      <p class="interview-line">resource() manages asynchronous read state with signals and exposes value, loading, error, and status.</p>
      <button (click)="id.update(v=>v+1)">Next</button>@if(user.isLoading()){<p>Loading...</p>}@else if(user.hasValue()){<div class="card">{{ user.value().name }}</div>}
    </div>
  `
})
export class ResourceDemo {
  id=signal(1);
  user=resource({params:()=>({id:this.id()}),loader:async({params})=>{await new Promise(r=>setTimeout(r,400));return {name:`User ${params.id}`};}});
}
