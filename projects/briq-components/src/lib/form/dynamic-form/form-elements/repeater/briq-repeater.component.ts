import { Component, Input } from '@angular/core';
import { BriqRepeaterBuilder } from './briq-repeater-builder';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
  selector: 'briq-repeater',
  templateUrl: './briq-repeater.component.html',
  styleUrls: ['./briq-repeater.component.scss']
})
export class BriqRepeaterComponent {
  @Input() public formElement: BriqRepeaterBuilder;
  @Input() public size: BriqSize;

  constructor() {
    this.size = BriqSize.REGULAR;
  }
}
