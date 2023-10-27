import { BriqFormElementBuilder } from '../../shared/briq-form-element-builder';
import { BriqFormElementType } from '../../shared/briq-form-element-type';
import { BriqFormInputType } from './briq-input-builder.types';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';

export class BriqInputBuilder extends BriqFormElementBuilder {
  public inputType?: string;
  public maxLength?: number;

  constructor(id: BriqIdentifier, name: string, label?: string) {
    super(id, name, label);
    this.type = BriqFormElementType.Input;
    this.inputType = BriqFormInputType.Text;
  }

  public setInputType(type: string): this {
    this.inputType = type;
    return this;
  }

  public setMaxLength(length: number): this {
    this.maxLength = length;
    return this;
  }
}
