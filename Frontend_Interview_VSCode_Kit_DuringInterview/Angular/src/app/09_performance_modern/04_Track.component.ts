/**
 * INTERVIEW ONE-LINER: Stable list tracking lets Angular reuse DOM efficiently; prefer stable unique IDs over array indexes for reorderable lists.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-04-track',
  standalone:true,

  template:`
    <div class="demo">
      <h2>@for track</h2>
      <p class="interview-line">Stable list tracking lets Angular reuse DOM efficiently; prefer stable unique IDs over array indexes for reorderable lists.</p>
      @for(user of users;track user.id){<div class="card">{{ user.name }}</div>}
    </div>
  `
})
export class TrackDemo {
  users=[{id:1,name:'A'},{id:2,name:'B'}];
}
