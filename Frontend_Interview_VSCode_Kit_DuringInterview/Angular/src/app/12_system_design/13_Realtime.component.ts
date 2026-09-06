/**
 * INTERVIEW ONE-LINER: Use polling for simple freshness, SSE for one-way server push, and WebSocket for frequent bidirectional real-time communication.
 * Interview note: This compact runnable example has comments around the key implementation.
 */
import { Component } from '@angular/core';

@Component({
  selector:'demo-13-realtime',
  standalone:true,

  template:`
    <div class="demo">
      <h2>System Design: Real-Time Updates</h2>
      <p class="interview-line">Use polling for simple freshness, SSE for one-way server push, and WebSocket for frequent bidirectional real-time communication.</p>
      <table><tr><td>Polling</td><td>Periodic refresh</td></tr><tr><td>SSE</td><td>Server → client</td></tr><tr><td>WebSocket</td><td>Bidirectional</td></tr></table>
    </div>
  `
})
export class RealtimeDemo {

}
