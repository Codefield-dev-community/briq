import { Component, Input } from '@angular/core';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { DateService } from '@shared/services/date.service';

@Component({
  selector: 'briq-table',
  templateUrl: './briq-table.component.html',
  styleUrls: ['./briq-table.component.scss']
})
export class BriqTableComponent {
  @Input() public tableColumns: string[];
  @Input() public tableData: any[];

  public dateFormat: string;
  public placeholder: any;

  constructor(public briqEventService: BriqEventService, private dateService: DateService) {
    this.dateFormat = this.dateService.defaultDateFormat;
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }
}
