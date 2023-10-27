import { BriqFormElementBuilder } from '../../shared/briq-form-element-builder';
import { BriqFormElementType } from '../../shared/briq-form-element-type';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';

export class BriqHiddenBuilder extends BriqFormElementBuilder {
  constructor(id: BriqIdentifier, name: string) {
    super(id, name);
    this.type = BriqFormElementType.Hidden;
  }
}
