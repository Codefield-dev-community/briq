import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'briq-basic-checkbox',
  templateUrl: './briq-basic-checkbox.component.html',
  styleUrls: ['./briq-basic-checkbox.component.scss']
})
export class BriqBasicCheckboxComponent {
  @Input() public value: boolean;
  @Input() public limit: boolean;
  @Output() public checked: EventEmitter<boolean>;

  constructor() {
    this.value = false;
    this.limit = false;
    this.checked = new EventEmitter<boolean>(this.value);
  }

  public check(event: MouseEvent): void {
    if (this.limit === false || this.value === true) {
      this.value = !this.value;
      this.checked.emit(this.value);
    }

    event.stopPropagation();
    event.preventDefault();
  }
}
