import { Component, Input } from '@angular/core';
import { BriqCurrencyInputBuilder } from '@briq/form/dynamic-form/form-elements/currency-input/briq-currency-input-builder';

@Component({
  selector: 'briq-currency-input',
  templateUrl: './briq-currency-input.component.html',
  styleUrls: ['./briq-currency-input.component.scss']
})
export class BriqCurrencyInputComponent {
  @Input() formElement: BriqCurrencyInputBuilder;
}
