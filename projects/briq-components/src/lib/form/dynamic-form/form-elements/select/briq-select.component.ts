import { Component, Input, OnInit } from '@angular/core';
import { BriqSelectBuilder } from './briq-select-builder';
import { BriqFormOption } from '../../shared/briq-form-option';

@Component({
  selector: 'briq-select',
  templateUrl: './briq-select.component.html',
  styleUrls: ['./briq-select.component.scss']
})
export class BriqSelectComponent implements OnInit {
  @Input() public formElement: BriqSelectBuilder;

  public filteredOptions: BriqFormOption[];
  public limit: boolean;
  public openMenu: boolean;
  public options: BriqFormOption[];

  constructor() {
    this.limit = false;
    this.openMenu = false;
  }

  public get selectedValueDisplay(): string {
    const value = this.formElement.value;
    let displayValue = '';

    if (this.formElement.multiple) {
      const values: BriqFormOption[] = value as BriqFormOption[];

      if (values.length) {
        displayValue = values[0].label;

        const length = values.length;

        if (length === 2) {
          displayValue = displayValue + ' en ' + (length - 1).toString() + ' andere waarde.';
        } else if (length > 2) {
          displayValue = displayValue + ' en ' + (length - 1).toString() + ' andere waardes.';
        }
      }
    } else if (value instanceof BriqFormOption) {
      displayValue = value.label;
    }

    displayValue = displayValue.charAt(0).toUpperCase() + displayValue.substr(1);

    return displayValue;
  }

  public ngOnInit(): void {
    this.formElement.watchOptions().subscribe(() => {
      this.setFilteredOptions();
    });
  }

  public close(): void {
    this.openMenu = false;
  }

  public collapseMenu(): void {
    this.openMenu = !this.openMenu;
  }

  public search(searchText: string): void {
    this.filteredOptions = this.formElement.findByLabel(searchText);
  }

  public setValue(option: BriqFormOption): void {
    this.formElement.checkUncheckValue(option);

    this.options = [...new Set(this.filteredOptions)];

    this.options = this.filteredOptions.filter((item) => {
      return item.id !== option.id;
    });

    if (!this.formElement.multiple) {
      this.close();
    }
  }

  public isMultiSelected(option: BriqFormOption): boolean {
    return this.formElement.optionIsChecked(option);
  }

  public isLimit(limitAmount: number): boolean {
    const selected = this.formElement.formControl.value;
    return !!selected && selected.length >= limitAmount;
  }

  private setFilteredOptions(): void {
    this.filteredOptions = this.formElement.options;
    this.options = this.filteredOptions;
  }
}
