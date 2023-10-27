import { Component, Input } from '@angular/core';
import { BriqListItem } from '@briq/shared/classes/briq-list-item';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqEvent } from '@briq/shared/classes/briq-event';

@Component({
  selector: 'briq-list-item',
  templateUrl: './briq-list-item.component.html',
  styleUrls: ['./briq-list-item.component.scss']
})
export class BriqListItemComponent {
  @Input() item: BriqListItem;

  constructor(private briqEventService: BriqEventService) {}

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }
}
