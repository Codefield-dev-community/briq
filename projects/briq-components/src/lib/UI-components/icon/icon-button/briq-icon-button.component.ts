import { Component, Input } from '@angular/core';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
  selector: 'briq-icon-button',
  templateUrl: './briq-icon-button.component.html',
  styleUrls: ['./briq-icon-button.component.scss']
})
export class BriqIconButtonComponent {
  @Input() public icon: string;
  @Input() public size: BriqSize;
  @Input() public isButton: boolean;

  constructor() {
    this.isButton = true;
  }
}
