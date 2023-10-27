import { BriqFormElementBuilder } from '@briq/form/dynamic-form/shared/briq-form-element-builder';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BriqFormElementType } from '@briq/form/dynamic-form/shared/briq-form-element-type';

export class BriqRangeSliderBuilder extends BriqFormElementBuilder {
  public min: number;
  public max: number;
  public rangeLabel: string;
  public step: number;

  constructor(id: BriqIdentifier, name: string, label: string) {
    super(id, name, label);
    this.type = BriqFormElementType.RangeSlider;
    this.min = 0;
    this.max = 100;
  }

  public setRangeLabel(label: string): this {
    this.rangeLabel = label;
    return this;
  }

  public setStep(step: number): this {
    this.step = step;
    return this;
  }

  public setMinMax(min: number, max: number): this {
    this.min = min;
    this.max = max;
    return this;
  }
}
