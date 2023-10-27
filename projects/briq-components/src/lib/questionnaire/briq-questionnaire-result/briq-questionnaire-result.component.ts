import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqQuestionnaireButtons } from '@briq/questionnaire/shared/briq-questionnaire-buttons';
import { BriqDynamicFormComponent } from '@briq/form/dynamic-form/dynamic-form/briq-dynamic-form.component';

@Component({
  selector: 'briq-questionnaire-result',
  templateUrl: './briq-questionnaire-result.component.html',
  styleUrls: ['./briq-questionnaire-result.component.scss']
})
export class BriqQuestionnaireResultComponent {
  @Input() title: string;
  @Input() buttons: BriqQuestionnaireButtons;
  @Output() public action: EventEmitter<BriqEvent> = new EventEmitter();

  close() {
    this.action.emit({ action: 'close' });
  }

  createActionEvent(event: string): void {
    this.action.emit({ action: event });
  }
}
