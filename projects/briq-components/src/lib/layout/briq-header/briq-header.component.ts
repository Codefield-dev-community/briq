import { Component, Input } from '@angular/core';
import { BriqHeader } from '@briq/layout/briq-header/briq-header';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqEventService } from '@briq/shared/services/briq-event.service';

@Component({
  selector: 'briq-header',
  templateUrl: './briq-header.component.html',
  styleUrls: ['./briq-header.component.scss']
})
export class BriqHeaderComponent {
  @Input() public info: BriqHeader;

  constructor(private briqEventService: BriqEventService) {
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }
}
