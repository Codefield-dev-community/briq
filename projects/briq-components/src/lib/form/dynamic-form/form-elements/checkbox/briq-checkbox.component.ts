import { Component, Input } from '@angular/core';
import { BriqCheckboxBuilder } from './briq-checkbox-builder';
import { BriqFormOption } from '../../shared/briq-form-option';

@Component({
  selector: 'briq-checkbox',
  templateUrl: './briq-checkbox.component.html',
  styleUrls: ['./briq-checkbox.component.scss']
})
export class BriqCheckboxComponent {
  @Input() formElement: BriqCheckboxBuilder;

  optionIsChecked(option: BriqFormOption): boolean {
    return this.formElement.optionIsChecked(option);
  }

  updateCheckbox(newVal: BriqFormOption): void {
    this.formElement.checkUncheckValue(newVal);
  }
}
