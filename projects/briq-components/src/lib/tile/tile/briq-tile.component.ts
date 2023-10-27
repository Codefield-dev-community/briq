import { Component, Input } from '@angular/core';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqTile } from '@briq/tile/shared/briq-tile';
import { DateService } from '@shared/services/date.service';

@Component({
  selector: 'briq-tile',
  templateUrl: './briq-tile.component.html',
  styleUrls: ['./briq-tile.component.scss']
})
export class BriqTileComponent {
  @Input() tile: BriqTile;
  public dateFormat: string;

  constructor(
    public briqEventService: BriqEventService,
    private dateService: DateService
  ) {
    this.dateFormat = this.dateService.defaultDateFormat;
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }
}
