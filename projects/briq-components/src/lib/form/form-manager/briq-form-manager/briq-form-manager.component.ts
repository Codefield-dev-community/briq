import { Component, OnInit } from '@angular/core';
import { BriqFormElement, BriqInputBuilder } from '../../dynamic-form/shared/briq-form-element';

@Component({
  selector: 'briq-form-manager',
  templateUrl: './briq-form-manager.component.html',
  styleUrls: ['./briq-form-manager.component.scss']
})
export class BriqFormManagerComponent {
  formElements: BriqFormElement[] = [
    new BriqInputBuilder('1', 'test', 'test').setValue(1),
    new BriqInputBuilder('2', 'test', 'test').setValue(2),
    new BriqInputBuilder('3', 'test', 'test').setValue(3),
    new BriqInputBuilder('4', 'test', 'test').setValue(4),
    new BriqInputBuilder('5', 'test', 'test').setValue(5)
  ];

  add: boolean;
  edit: BriqFormElement;

  addEditElement(element: BriqFormElement) {
    const elementExists: BriqFormElement[] = this.formElements.filter((el) => el.id === element.id);

    if (elementExists.length > 0) {
      this.formElements = this.formElements.map((el) => {
        return el.id === element.id ? element : el;
      });
    } else {
      this.formElements.push(element);
    }

    this.add = false;
  }

  editElement(element: BriqFormElement) {
    this.edit = element;
    this.add = true;
  }

  removeElement(element: BriqFormElement) {
    this.formElements = this.formElements.filter((el) => el.id !== element.id);
  }
}
