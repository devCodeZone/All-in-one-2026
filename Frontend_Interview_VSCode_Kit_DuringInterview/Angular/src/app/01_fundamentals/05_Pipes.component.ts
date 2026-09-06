/**
 * INTERVIEW ONE-LINER: Pipes transform presentation values declaratively; pure pipes rerun only when input references change.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector:'demo-05-pipes',
  standalone:true,
  imports:[DatePipe,CurrencyPipe],
  template:`
    <div class="demo">
      <h2>Built-in Pipes</h2>
      <p class="interview-line">Pipes transform presentation values declaratively; pure pipes rerun only when input references change.</p>
      <p>{{ today | date:"mediumDate" }}</p><p>{{ amount | currency:"INR" }}</p>
    </div>
  `
})
export class PipesDemo {
  today=new Date();
  amount=2500;
}
