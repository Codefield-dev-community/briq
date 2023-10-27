import { BriqFormElementBuilder } from '../../shared/briq-form-element-builder';
import { BriqFormElementType } from '../../shared/briq-form-element-type';
import { BriqIdentifier } from '../../../../shared/classes/briq-identifier';

export class BriqTextareaBuilder extends BriqFormElementBuilder {
  constructor(id: BriqIdentifier, name: string, label?: string) {
    super(id, name, label);
    this.type = BriqFormElementType.Textarea;
  }
}
