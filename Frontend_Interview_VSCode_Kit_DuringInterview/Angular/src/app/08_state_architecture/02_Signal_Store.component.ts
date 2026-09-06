/** INTERVIEW ONE-LINER: A provided service with private writable signals and public readonly/computed signals is a lightweight Angular store pattern. */
import { Component, Injectable, computed, inject, signal } from '@angular/core';
@Injectable({providedIn:'root'}) export class CartStore{private _count=signal(0);count=this._count.asReadonly();hasItems=computed(()=>this._count()>0);add(){this._count.update(v=>v+1)}clear(){this._count.set(0)}}
@Component({selector:'demo-signal-store',standalone:true,template:`<div class="demo"><h2>Signal Store Service</h2><p class="interview-line">A provided service with private writable signals and public readonly/computed signals is a lightweight Angular store pattern.</p><p>{{ store.count() }} / {{ store.hasItems() }}</p><button (click)="store.add()">Add</button><button (click)="store.clear()">Clear</button></div>`})
export class SignalStoreDemo{store=inject(CartStore)}
