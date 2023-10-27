import { BriqFormElement } from '@briq/form/dynamic-form/shared/briq-form-element';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BriqQuestionnaireResultItem } from '@briq/questionnaire/shared/briq-questionnaire-result-item';
import { BriqQuestionnaireButtons } from '@briq/questionnaire/shared/briq-questionnaire-buttons';
import { BriqListItem } from '@briq/shared/classes/briq-list-item';

export class BriqQuestionnaireStep {
  public formElements: BriqFormElement[];
  public text: string;
  public listItems: BriqListItem[];
  public progress: number;
  public stepsRemaining: number;
  public buttons: BriqQuestionnaireButtons;
  public button?: any;

  constructor(public id: BriqIdentifier, public title: string) {
    this.formElements = [];
  }

  public setFormElements(elements: BriqFormElement[]): BriqQuestionnaireStep {
    this.formElements = elements;
    return this;
  }

  public setText(text: string): BriqQuestionnaireStep {
    this.text = text;
    return this;
  }

  public setListItems(listItems: BriqListItem[]): BriqQuestionnaireStep {
    this.listItems = listItems;
    return this;
  }

  public setProgress(progress: number, stepsRemaining: number): BriqQuestionnaireStep {
    this.stepsRemaining = stepsRemaining;
    this.progress = progress;
    return this;
  }

  public setButtons(buttons: BriqQuestionnaireButtons): BriqQuestionnaireStep {
    this.buttons = buttons;
    return this;
  }

  public setButton(buttonText: string, buttonAction?: string): BriqQuestionnaireStep {
    this.button = {
      text: buttonText,
      action: buttonAction
    };
    return this;
  }

  public getValues(): BriqQuestionnaireResultItem[] {
    const values = [];

    for (const element of this.formElements) {
      if (element.formControl.value) {
        values.push(
          new BriqQuestionnaireResultItem(element.id, element.label, element.formControl.value, element.description)
        );
      }
    }

    return values;
  }
}
