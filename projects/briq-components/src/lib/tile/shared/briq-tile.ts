import { BriqLabelValue } from '../../shared/classes/briq-label-value';
import { BriqIdentifier } from '../../shared/classes/briq-identifier';
import { BriqLink } from '../../shared/classes/briq-link';
import { BriqIconOptions } from '@briq/layout/briq-header/briq-header';

export class BriqTile {
  public options: BriqLabelValue[];
  public button: BriqLink;

  constructor(
    public id: BriqIdentifier,
    public title: string,
    public subtitle: string | Date,
    public info: BriqLabelValue[],
    public iconOptions?: BriqIconOptions
  ) {
  }

  public setOptions(options: BriqLabelValue[]): this {
    this.options = options;
    return this;
  }

  public setButton(button: BriqLink): this {
    this.button = button;
    return this;
  }
}
