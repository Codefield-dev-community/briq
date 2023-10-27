import { BriqFormElementBuilder } from './briq-form-element-builder';
import { BriqFormOption } from './briq-form-option';
import { BehaviorSubject, Observable } from 'rxjs';

export class BriqFormOptionsElementBuilder extends BriqFormElementBuilder {
    public options: BriqFormOption[] = [];
    public multiple?: boolean;
    public limitAmount?: number;
    public value: BriqFormOption | BriqFormOption[];
    public noOptionsText = 'Geen opties beschikbaar';
    private optionsUpdate: BehaviorSubject<BriqFormOption[]> = new BehaviorSubject(this.options);

    // TODO:: for the validation, check if the option value is never the same value, else throw err
    public setOptions(options: BriqFormOption[]): this {
        this.options = options;
        this.optionsUpdate.next(this.options);
        return this;
    }

    public watchOptions(): Observable<BriqFormOption[]> {
        return this.optionsUpdate.asObservable();
    }

    public setValue(value: BriqFormOption | BriqFormOption[]): this {
        if (this.multiple) {
            this.setMultipleValues(value as BriqFormOption[]);
        } else {
            const option = this.findFromOptions(value as BriqFormOption);
            super.setValue(option);
        }

        return this;
    }

    public setValueByLabel(label: string): this {
        const item = this.options.find((option) => option.label === label);
        super.setValue(item);
        return this;
    }

    public getFormOptionValue(): any {
        if (this.getValue()) {
            const val = this.getValue();
            return val.value;
        }
    }

    public setMultiple(multiple: boolean = true, limitAmount?: number): this {
        this.multiple = multiple;
        this.limitAmount = limitAmount;
        return this;
    }

    public setNoOptionsText(text: string): this {
        this.noOptionsText = text;
        return this;
    }

    public optionIsChecked(option: BriqFormOption): boolean {
        if (this.multiple) {
            return this.optionInValues(option);
        } else {
            return this.isSameOption(option, this.value as BriqFormOption);
        }
    }

    public checkUncheckValue(option: BriqFormOption): void {
        if (this.multiple) {
            this.addOrRemoveFromValuesArray(option);
        } else {
            this.setUnsetSingleValue(option);
        }
    }

    private setUnsetSingleValue(option: BriqFormOption): void {
        const val = this.optionIsChecked(option) ? null : option;
        super.setValue(val);
    }

    private addOrRemoveFromValuesArray(option: BriqFormOption): void {
        const values = this.value ? (this.value as BriqFormOption[]) : [];

        if (this.optionInValues(option)) {
            super.setValue(values.filter((val) => !this.isSameOption(val, option)));
        } else {
            values.push(option);
            super.setValue(values);
        }
    }

    private optionInValues(option: BriqFormOption): boolean {
        if (Array.isArray(this.value) && this.multiple) {
            for (const val of this.value) {
                if (this.isSameOption(option, val)) {
                    return true;
                }
            }
        }

        return false;
    }

    private setMultipleValues(options: BriqFormOption[]): void {
        if (!options?.length) {
            return;
        }

        const values = [];

        for (const option of options) {
            const availableOption = this.findFromOptions(option);

            if (availableOption) {
                values.push(availableOption);
            }
        }

        super.setValue(values.length ? values : null);
    }

    private isSameOption(option1: BriqFormOption, option2: BriqFormOption): boolean {
        if (option1 && option2) {
            return option1.id === option2.id || option1.value === option2.value;
        }

        return false;
    }

    private findFromOptions(option: BriqFormOption): BriqFormOption {
        return this.options.find((o) => this.isSameOption(o, option));
    }
}
