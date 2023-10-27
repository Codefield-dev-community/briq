import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BriqEvent } from '@briq/shared/classes/briq-event';

@Injectable({
  providedIn: 'root'
})
export class BriqEventService {
  public eventSubject$: Subject<BriqEvent>;

  constructor() {
    this.eventSubject$ = new Subject<BriqEvent>();
  }

  public triggerAction(event: BriqEvent): void {
    this.eventSubject$.next(event);
  }
}
