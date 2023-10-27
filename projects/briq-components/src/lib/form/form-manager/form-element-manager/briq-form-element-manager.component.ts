import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  BriqCheckboxBuilder,
  BriqFormElement,
  BriqInputBuilder,
  BriqSelectBuilder
} from '../../dynamic-form/shared/briq-form-element';
import { BriqFormOption } from '../../dynamic-form/shared/briq-form-option';
import { BriqFormElementContract } from '../shared/briq-form-element-contract';
import { BriqFormElementTypes } from '../shared/briq-form-element-types';

@Component({
  selector: 'briq-form-element-manager',
  templateUrl: './briq-form-element-manager.component.html',
  styleUrls: ['./briq-form-element-manager.component.scss']
})
export class BriqFormElementManagerComponent implements OnInit {
  elementOptions: BriqFormElement[] = [];
  createdElement: BriqFormElement;

  @Input() set edit(element: BriqFormElement) {
    this.createdElement = element;
    this.createElementOptions(element);
  }

  @Output() create: EventEmitter<BriqFormElement> = new EventEmitter();

  ngOnInit() {
    if (!this.createdElement) {
      this.createElementOptions();
    }
  }

  createElementOptions(element: BriqFormElement = null) {
    this.elementOptions = [
      new BriqInputBuilder('name', 'name', 'name').setValue(element?.value),
      new BriqInputBuilder('label', 'label', 'label').setValue(element?.label),
      new BriqSelectBuilder('type', 'type', 'type')
        .setOptions(BriqFormElementTypes.map((type) => new BriqFormOption(type, type, type.toLowerCase().toString())))
        .setValue(new BriqFormOption(element?.type, '', element?.type)),
      new BriqCheckboxBuilder('required', 'required', 'required')
        .setOptions([new BriqFormOption(true, 'yes', 'true')])
        .setValue(new BriqFormOption(element?.required, '', 'true'))
    ];
  }

  createElement(formValues: BriqFormElementContract) {
    switch (formValues.type) {
      case 'input':
        this.createdElement = new BriqInputBuilder(formValues.name, formValues.name, formValues.label).setRequired(
          formValues.required
        );
        break;
      case 'select':
        this.createdElement = new BriqSelectBuilder(formValues.name, formValues.name, formValues.label)
          .setOptions([new BriqFormOption('test', 'test', 'test')])
          .setRequired(formValues.required);
        break;
    }

    if (this.createdElement) {
      this.create.emit(this.createdElement);
    }
  }
}
