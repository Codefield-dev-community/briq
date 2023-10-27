import { BriqLabelType } from './briq-label-value.type';
import { BriqLabelValue } from '@briq/shared/classes/briq-label-value';
import { BriqID, BriqIdentifier } from '@briq/shared/classes/briq-identifier';

export class BriqFormOption extends BriqLabelValue {
  searchMatch?: boolean;
  label: string;
  image: string;
  disabled: boolean;

  constructor(value: any, label: string | number | BriqLabelType, id: BriqIdentifier) {
    super('', value, BriqID.generateID(id));
    this.checkLabelType(label);
  }

  public static defaultOptionByID(id: BriqIdentifier): BriqFormOption {
    return new BriqFormOption('', '', BriqID.generateID(id));
  }

  public static multipleDefaultOptionsByID(ids: BriqIdentifier[]): BriqFormOption[] {
    return ids?.length ? ids.map((id) => BriqFormOption.defaultOptionByID(id)) : null;
  }

  setDisabled(disabled: boolean): this {
    this.disabled = disabled;
    return this;
  }

  private checkLabelType(label: string | number | BriqLabelType): void {
    if (typeof label === 'object') {
      this.image = label.image;

      if (label.label) {
        this.label = label.label.toString();
      }
    } else if (label) {
      this.label = label.toString();
    }
  }
}
