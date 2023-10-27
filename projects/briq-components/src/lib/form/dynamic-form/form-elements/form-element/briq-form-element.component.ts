import { Component, Input } from '@angular/core';
import { BriqFormElement } from '../../shared/briq-form-element';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'briq-form-element',
  templateUrl: './briq-form-element.component.html',
  styleUrls: ['./briq-form-element.component.scss']
})
export class BriqFormElementComponent {
  @Input() formElement: BriqFormElement;
  public range: any;
  public rangeLabel: string;

  constructor(private briqEventService: BriqEventService) {
    this.range = [];
    this.rangeLabel = '';
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }

  public addRangeToLabel(data: any): void {
    if (data.value.length) {
      this.range = `: ${formatNumber(data.value[0], 'nl_NL', '1.0-0')} -
      ${formatNumber(data.value[1], 'nl_NL', '1.0-0')}`;
      this.rangeLabel = ` ${data?.rangeLabel}`;
    }
  }
}
