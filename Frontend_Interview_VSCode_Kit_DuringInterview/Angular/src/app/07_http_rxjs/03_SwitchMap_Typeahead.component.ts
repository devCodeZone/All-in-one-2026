/** INTERVIEW ONE-LINER: switchMap is ideal for typeahead because a new query unsubscribes from the previous inner Observable, making latest-input-wins behavior natural. */
import { Component, signal } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap, of, delay, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({selector:'demo-switchmap',standalone:true,template:`<div class="demo"><h2>switchMap Typeahead</h2><p class="interview-line">switchMap is ideal for typeahead because a new query unsubscribes from the previous inner Observable, making latest-input-wins behavior natural.</p><input (input)="query$.next($any($event.target).value)"><p>{{ result() }}</p></div>`})
export class SwitchMapTypeaheadDemo{query$=new Subject<string>();result=signal('');constructor(){this.query$.pipe(debounceTime(250),distinctUntilChanged(),switchMap(q=>of(q).pipe(delay(300),map(v=>`Result for ${v}`))),takeUntilDestroyed()).subscribe(v=>this.result.set(v));}}
