import { Component, Input } from '@angular/core';
import { BriqCalendarBuilder } from '@briq/form/dynamic-form/form-elements/calendar/shared/briq-calendar-builder';

@Component({
  selector: 'briq-calendar',
  templateUrl: './briq-calendar.component.html',
  styleUrls: ['./briq-calendar.component.scss']
})
export class BriqCalendarComponent{
  @Input() public formElement: BriqCalendarBuilder;
  public value: Date;

  constructor() {
    this.value = this.formElement.value;
  }

  public click(value: Date): void {
    this.formElement.value = value;
    this.value = value;
  }
}
