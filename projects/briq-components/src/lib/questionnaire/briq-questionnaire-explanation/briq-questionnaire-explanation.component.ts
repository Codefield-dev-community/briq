import { Component, Input } from '@angular/core';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqSlider } from '@briq/slider/shared/briq-slider';

@Component({
  selector: 'briq-questionnaire-explanation',
  templateUrl: './briq-questionnaire-explanation.component.html',
  styleUrls: ['./briq-questionnaire-explanation.component.scss']
})
export class BriqQuestionnaireExplanationComponent {
  @Input() public slider: BriqSlider;

  constructor(public briqEventService: BriqEventService) {}

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }
}
