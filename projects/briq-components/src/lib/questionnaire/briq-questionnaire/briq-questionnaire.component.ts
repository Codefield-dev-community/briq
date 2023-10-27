import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BriqQuestionnaireStep } from '@briq/questionnaire/shared/briq-questionnaire-step';
import { BriqSize } from '@briq/shared/classes/briq-size';
import { BriqQuestionnaireResultItem } from '@briq/questionnaire/shared/briq-questionnaire-result-item';
import { BriqDirection } from '@briq/shared/classes/briq-direction';

@Component({
  selector: 'briq-questionaire',
  templateUrl: './briq-questionnaire.component.html',
  styleUrls: ['./briq-questionnaire.component.scss']
})
export class BriqQuestionnaireComponent implements OnInit {
  @Input() steps: BriqQuestionnaireStep[];
  @Input() size: BriqSize = BriqSize.LARGE;

  @Output() close: EventEmitter<BriqQuestionnaireResultItem[]> = new EventEmitter();

  public activeStepPercentage = 0;
  public activeStepIndex = 0;
  public activeStep: BriqQuestionnaireStep;
  private activeForm: FormGroup;

  constructor() {}

  public ngOnInit(): void {
    this.setActiveStep();
    window.addEventListener('keydown', this.onKeydown.bind(event));
  }

  public closeQuestionnaire() {
    window.removeEventListener('keydown', this.onKeydown);
    this.close.emit(null);
  }

  public submitForm(direction: BriqDirection) {
    switch (direction) {
      case 'next':
        if (this.activeForm.valid) {
          this.nextStep();
        } else {
          this.activeForm.markAllAsTouched();
        }
        break;
      case 'previous':
        this.previousStep();
        break;
      case 'finish':
        this.finish();
        break;
    }
  }

  setForm(fg: FormGroup) {
    // @TODO not the way
    this.activeForm = fg;
  }

  public nextStep() {
    this.activeStepIndex++;
    this.setActiveStep();
  }

  public previousStep() {
    this.activeStepIndex--;
    this.setActiveStep();
  }

  public finish() {
    const values = [];
    for (const step of this.steps) {
      values.push(
        ...step.formElements.map(
          (element) =>
            new BriqQuestionnaireResultItem(element.id, element.label, element.formControl.value, element.description)
        )
      );
    }

    this.close.emit(values);
  }

  public nextButtonDisabled() {
    return this.activeStep.getValues().length === 0 ? true : undefined;
  }

  private onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.closeQuestionnaire();
    }
  };

  private setActiveStep() {
    this.activeStep = this.steps[this.activeStepIndex];
    this.activeStepPercentage = (100 / this.steps.length) * this.activeStepIndex;
  }
}
