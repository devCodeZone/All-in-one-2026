/** INTERVIEW ONE-LINER: Angular DI supplies dependencies through providers; inject() is the modern function-based way to request them. */
import { Component, Injectable, inject } from '@angular/core';
@Injectable({providedIn:'root'}) export class GreetingService{greet(){return 'Hello from injected service';}}
@Component({selector:'demo-di',standalone:true,template:`<div class="demo"><h2>DI + inject()</h2><p class="interview-line">Angular DI supplies dependencies through providers; inject() is the modern function-based way to request them.</p><div class="card">{{ message }}</div></div>`})
export class DiInjectDemo{private service=inject(GreetingService);message=this.service.greet();}
