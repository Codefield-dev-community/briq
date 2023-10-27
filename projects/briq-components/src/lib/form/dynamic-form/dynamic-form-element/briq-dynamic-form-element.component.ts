import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BriqFileUploadBuilder, BriqFormElement, BriqRangeSliderBuilder } from '../shared/briq-form-element';
import { BriqEvent } from '@briq/shared/classes/briq-event';

@Component({
  selector: 'briq-dynamic-form-element',
  templateUrl: './briq-dynamic-form-element.component.html',
  styleUrls: ['./briq-dynamic-form-element.component.scss']
})
export class BriqDynamicFormElementComponent {
  @Input() formElement: BriqFormElement;
  @Output() updateRange: EventEmitter<BriqRangeSliderBuilder>;
  @Output() uploadFile: EventEmitter<BriqEvent>;

  constructor() {
    this.updateRange = new EventEmitter<BriqRangeSliderBuilder>();
    this.uploadFile = new EventEmitter<BriqEvent>();
  }

  public onUpdateRange(event: BriqRangeSliderBuilder): void {
    this.updateRange.emit(event);
  }

  public onUpload(event: BriqEvent): void {
    this.uploadFile.emit(event);
  }
}
