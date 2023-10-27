import { BriqFormElementType } from '../../shared/briq-form-element-type';
import { BriqFormOption } from '../../shared/briq-form-option';
import { BriqIdentifier } from '../../../../shared/classes/briq-identifier';
import { BriqFormOptionsElementBuilder } from '../../shared/briq-form-options-element-builder';

export class BriqCheckboxBuilder extends BriqFormOptionsElementBuilder {
  public options: BriqFormOption[];
  public multiple?: boolean;
  public itemsInRow?: string;
  public spreadLastItem?: boolean;
  public value: BriqFormOption;

  constructor(id: BriqIdentifier, name: string, label?: string) {
    super(id, name, label);
    this.type = BriqFormElementType.Checkbox;
  }

  setItemsInRow(itemsInRow: string | number = 1, spreadLastItem: boolean = true) {
    this.itemsInRow = itemsInRow.toString();
    this.spreadLastItem = spreadLastItem;
    return this;
  }
}
