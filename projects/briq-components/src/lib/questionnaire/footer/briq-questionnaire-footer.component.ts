import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BriqDirection } from '../../shared/classes/briq-direction';
import { BriqButton } from '@briq/UI-components/button/briq-button';

@Component({
  selector: 'briq-questionnaire-footer',
  templateUrl: './briq-questionnaire-footer.component.html',
  styleUrls: ['./briq-questionnaire-footer.component.scss']
})
export class BriqQuestionnaireFooterComponent {
  @Output() navigate: EventEmitter<BriqDirection> = new EventEmitter();
  @Input() previousButton: BriqButton;
  @Input() nextButton: BriqButton;
  @Input() stepsRemaining: number;
  @Input() progress: number;

  public buttonClick(direction: BriqDirection): void {
    this.navigate.emit(direction);
  }
}
