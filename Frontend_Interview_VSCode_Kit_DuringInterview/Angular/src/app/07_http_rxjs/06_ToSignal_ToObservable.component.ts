/** INTERVIEW ONE-LINER: toSignal converts an Observable to a Signal; toObservable bridges a Signal into RxJS pipelines. */
import { Component, signal } from '@angular/core';import { toObservable,toSignal } from '@angular/core/rxjs-interop';import { map } from 'rxjs';
@Component({selector:'demo-interop',standalone:true,template:`<div class="demo"><h2>Signals ↔ RxJS</h2><p class="interview-line">toSignal converts an Observable to a Signal; toObservable bridges a Signal into RxJS pipelines.</p><button (click)="count.update(v=>v+1)">Count {{ count() }}</button><p>Doubled: {{ doubled() }}</p></div>`})
export class ToSignalToObservableDemo{count=signal(1);doubled=toSignal(toObservable(this.count).pipe(map(v=>v*2)),{initialValue:2});}
