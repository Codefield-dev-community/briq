import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { BriqFormElement } from '../shared/briq-form-element';
import { FormGroup } from '@angular/forms';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';

@Component({
  selector: 'briq-dynamic-form',
  templateUrl: './briq-dynamic-form.component.html',
  styleUrls: ['./briq-dynamic-form.component.scss']
})
export class BriqDynamicFormComponent {
  @Input() public identifier: BriqIdentifier;
  @Input() public class: string;
  @Input() public name: string;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() public submit: EventEmitter<any>;
  @Output() public init: EventEmitter<FormGroup>;

  public formElements: BriqFormElement[];
  public formGroup: FormGroup;

  constructor(
    private el: ElementRef
  ) {
    this.submit = new EventEmitter<any>();
    this.init = new EventEmitter<FormGroup>();
  }

  @Input() set elements(elements: BriqFormElement[]) {
    this.createForm(elements);
    this.init.emit(this.formGroup);
  }

  private static getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 50;
    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
  }

  public createForm(elements: BriqFormElement[]): void {
    this.formElements = elements;
    this.formGroup = new FormGroup({});

    for (const element of this.formElements) {
      this.formGroup.addControl(element.name, element.formControl);
    }
  }

  public triggerSubmit(): void {
    if (this.formGroup.valid) {
      this.submit.emit(this.formGroup.value);
    } else {
      this.scrollToFirstInvalidControl();
      this.formGroup.markAllAsTouched();
    }
  }

  private scrollToFirstInvalidControl(): void {
    setTimeout(() => {
      const firstInvalidControl: HTMLElement = this.el.nativeElement.querySelector('form .invalid');

      if (firstInvalidControl) {
        firstInvalidControl.scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    });
  }
}
