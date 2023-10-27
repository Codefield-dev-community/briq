import { BriqFormElementType } from './briq-form-element-type';
import { FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BehaviorSubject, Observable } from 'rxjs';
import { BriqSidebarOverlay } from '@briq/questionnaire/shared/briq-sidebar-overlay';
import { AgeRangeContract } from '../../../../../personas/wizard/steps/biography/biography.contract';

export abstract class BriqFormElementBuilder {
  public type: BriqFormElementType;
  public placeholder: string;
  public value: any;
  public help: BriqSidebarOverlay;
  public disabled = false;
  public validators: any;
  public required: boolean;
  public description: string;
  public watchChanges: boolean;
  public markValidInput: boolean;

  private control: FormControl;
  private valueSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  protected constructor(public id: BriqIdentifier, public name: string, public label?: string) {
    this.control = new FormControl();
    this.validators = [];
  }

  public get formControl(): FormControl | FormArray {
    return this.control as FormControl;
  }

  public setType(type: BriqFormElementType): this {
    this.type = type;
    return this;
  }

  public setRequired(required: boolean = true): this {
    this.required = required;
    this.validators.push(Validators.required);
    this.control.setErrors({ required: true });
    this.control.setValidators(this.validators);
    return this;
  }

  public setEmailValidator(): this {
    this.validators.push(Validators.email);
    this.control.setErrors({ email: true });
    this.control.setValidators(this.validators);
    return this;
  }

  public setMinMaxValidator(min?: number, max?: number): this {
    this.validators.push(Validators.min(min), Validators.max(max));
    this.control.setValidators(this.validators);
    return this;
  }

  public setHelp(title: string, body: string, position: 'left' | 'right'): this {
    this.help = { title, body, position };
    return this;
  }

  public setPlaceholder(placeholder: string): this {
    this.placeholder = placeholder;
    return this;
  }

  public setValue(value: any): this {
    this.value = value;
    this.control.patchValue(this.value);
    this.valueSubject.next(this.value);
    return this;
  }

  public setRangeValue(value: AgeRangeContract): this {
    if (value) {
      this.value = [
        value.min,
        value.max
      ];
      this.control.patchValue(this.value);
      this.valueSubject.next(this.value);
    }
    return this;
  }

  public getValue(): any {
    return this.control.value;
  }

  // @TODO create basic validators
  // @TODO validators not working on checkbox (and maybe other form elements)
  public setValidators(validators: ValidatorFn[]): this {
    this.validators = validators;
    this.control.setValidators(this.validators);
    return this;
  }

  public setDisabled(disabled: boolean): this {
    this.disabled = disabled;
    return this;
  }

  public setDescription(description: string): this {
    this.description = description;
    return this;
  }

  public setMarkValidInput(markValidInput: boolean): this {
    this.markValidInput = markValidInput;
    return this;
  }

  public isInvalid(): boolean {
    return this.control.touched && this.control.invalid;
  }

  public getErrors(): any {
    return Object.keys(this.control.errors);
  }

  public watch(): Observable<any> {
    this.watchChanges = true;
    return this.valueSubject.asObservable();
  }
}
