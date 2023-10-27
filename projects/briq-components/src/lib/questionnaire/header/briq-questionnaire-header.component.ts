import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'briq-questionnaire-header',
  templateUrl: './briq-questionnaire-header.component.html',
  styleUrls: ['./briq-questionnaire-header.component.scss']
})
export class BriqQuestionnaireHeaderComponent {
  @Output() close: EventEmitter<void>;

  constructor() {
    this.close = new EventEmitter<void>();
  }

  public emitClose(): void {
    this.close.emit();
  }
}
