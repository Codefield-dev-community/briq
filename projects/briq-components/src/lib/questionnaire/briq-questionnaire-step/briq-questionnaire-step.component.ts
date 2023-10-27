import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BriqQuestionnaireStep } from '@briq/questionnaire/shared/briq-questionnaire-step';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqDynamicFormComponent } from '@briq/form/dynamic-form/dynamic-form/briq-dynamic-form.component';

@Component({
  selector: 'briq-questionnaire-step',
  templateUrl: './briq-questionnaire-step.component.html',
  styleUrls: ['./briq-questionnaire-step.component.scss']
})
export class BriqQuestionnaireStepComponent {
  @Input() public step: BriqQuestionnaireStep;
  @Output() public action: EventEmitter<BriqEvent>;

  constructor() {
    this.action = new EventEmitter<BriqEvent>();
  }

  public submitForm(data: any): void {
    this.action.emit({
      action: 'next',
      data
    });
  }

  public close(): void {
    this.action.emit({ action: 'close' });
  }

  public createActionEvent(event: string, form: BriqDynamicFormComponent): void {
    if (event === 'next' && form) {
      form.triggerSubmit();
    } else {
      this.action.emit({
        action: event,
        data: this.step
      });
    }
  }
}
