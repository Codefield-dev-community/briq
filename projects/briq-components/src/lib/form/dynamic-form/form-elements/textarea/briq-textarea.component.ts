import { Component, Input } from '@angular/core';
import { BriqTextareaBuilder } from './textarea-builder';

@Component({
  selector: 'briq-textarea',
  templateUrl: './briq-textarea.component.html',
  styleUrls: ['./briq-textarea.component.scss']
})
export class BriqTextareaComponent {
  @Input() formElement: BriqTextareaBuilder;
}
