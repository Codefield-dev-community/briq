import { BriqFormElementBuilder } from '../../shared/briq-form-element-builder';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BriqFormElementType } from '@briq/form/dynamic-form/shared/briq-form-element-type';

export class BriqCurrencyInputBuilder extends BriqFormElementBuilder {
  public options: any;

  constructor(id: BriqIdentifier, name: string, label?: string) {
    super(id, name, label);
    this.type = BriqFormElementType.CurrencyInput;
    this.options = { prefix: '€ ', thousands: '.', decimal: ',', precision: 0, align: 'left' };
  }
}
