/**
 * INTERVIEW ONE-LINER:
 * In Angular, isolate AI transport in an injectable service and expose typed Signals/Observables so components remain presentation-focused.
 *
 * STUDY METHOD:
 * 1. Say the one-liner aloud.
 * 2. Read the comments beside the implementation.
 * 3. Run or integrate the example using the README instructions.
 */


import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AiService {
  private http = inject(HttpClient);
  readonly loading = signal(false);

  ask(message: string) {
    this.loading.set(true);

    return this.http.post<{ text: string }>("/api/chat", { message });
  }
}
