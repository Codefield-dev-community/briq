import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BriqDashboardService {
  public changeLayout$: BehaviorSubject<boolean>;

  constructor() {
    this.changeLayout$ = new BehaviorSubject<boolean>(true);
  }
}
