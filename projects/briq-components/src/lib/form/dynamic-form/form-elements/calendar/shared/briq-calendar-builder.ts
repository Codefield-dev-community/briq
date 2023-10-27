import { BriqFormElementBuilder } from '@briq/form/dynamic-form/shared/briq-form-element-builder';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BriqFormElementType } from '@briq/form/dynamic-form/shared/briq-form-element-type';

export class BriqCalendarBuilder extends BriqFormElementBuilder {

  constructor(id: BriqIdentifier, name: string, label?: string) {
    super(id, name, label);
    this.type = BriqFormElementType.Calendar;
  }
}
