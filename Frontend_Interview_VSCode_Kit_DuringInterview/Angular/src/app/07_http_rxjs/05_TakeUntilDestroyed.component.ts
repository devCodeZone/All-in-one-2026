/** INTERVIEW ONE-LINER: takeUntilDestroyed() automatically completes subscriptions when the Angular injection context is destroyed. */
import { Component, signal } from '@angular/core';import { interval } from 'rxjs';import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({selector:'demo-takeuntil',standalone:true,template:`<div class="demo"><h2>takeUntilDestroyed()</h2><p class="interview-line">takeUntilDestroyed() automatically completes subscriptions when the Angular injection context is destroyed.</p><p>Ticks: {{ ticks() }}</p></div>`})
export class TakeUntilDestroyedDemo{ticks=signal(0);constructor(){interval(1000).pipe(takeUntilDestroyed()).subscribe(v=>this.ticks.set(v));}}
