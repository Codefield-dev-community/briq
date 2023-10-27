import { BriqFormElementBuilder } from '../../shared/briq-form-element-builder';
import { BriqFormElementType } from '../../shared/briq-form-element-type';
import { BriqFormInputType } from '../input/briq-input-builder.types';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { FormArray, FormControl, Validators } from '@angular/forms';

export class BriqRepeaterBuilder extends BriqFormElementBuilder {
    public inputType?: string;
    public formArray: FormArray;
    public items: FormControl[];

    constructor(id: BriqIdentifier, name: string, label?: string) {
        super(id, name, label);
        this.type = BriqFormElementType.Repeater;
        this.inputType = BriqFormInputType.Text;
        this.formArray = new FormArray([]);
        this.items = [];
    }

    public get formControl(): FormArray {
        return this.formArray;
    }

    public setValue(value: any): this {
        super.setValue(value);
        this.setItems();
        return this;
    }

    public setItems(): void {
        if (this.value?.length) {
            for (const item of this.value) {
                const control = new FormControl(item);
                this.items.push(control);
                this.formArray.push(control);
            }
        }
    }

    public setRequired(required: boolean = true): this {
        super.setRequired(required);

        for (const control of this.formArray.controls) {
            control.setValidators(Validators.required);
        }

        return this;
    }

    public addControl(): void {
        const control = new FormControl('');
        this.items.push(control);
        this.formArray.push(control);
    }

    public removeControl(index: number): void {
        this.items.splice(index, 1);
        this.formArray.removeAt(index);
    }
}
