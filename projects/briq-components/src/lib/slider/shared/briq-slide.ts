import { BriqListItem } from '@briq/shared/classes/briq-list-item';
import { BriqFormElement } from '@briq/form/dynamic-form/shared/briq-form-element';

export class BriqSlide {
  public text: string;
  public listItems: BriqListItem[];
  public formElements: BriqFormElement[];
  public nextRoute: string;
  public button: {
    text: string;
    action: string;
  };

  constructor(public id: number, public title: string) {}

  public setText(text: string): BriqSlide {
    this.text = text;
    return this;
  }

  public setListItems(listItems: BriqListItem[]): BriqSlide {
    this.listItems = listItems;
    return this;
  }

  public setFormElements(elements: BriqFormElement[]): BriqSlide {
    this.formElements = elements;
    return this;
  }

  public setButton(text: string, action?: string): BriqSlide {
    this.button = {
      text,
      action
    };
    return this;
  }
}
