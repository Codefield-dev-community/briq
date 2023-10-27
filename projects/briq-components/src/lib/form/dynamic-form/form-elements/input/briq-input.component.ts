import { Component, Input } from '@angular/core';
import { BriqInputBuilder } from './briq-input-builder';

@Component({
  selector: 'briq-input',
  templateUrl: './briq-input.component.html',
  styleUrls: ['./briq-input.component.scss']
})
export class BriqInputComponent {
  @Input() formElement: BriqInputBuilder;
}
