import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BriqFileUploadBuilder } from '@briq/form/dynamic-form/form-elements/file-upload/briq-file-upload-builder';
import { BriqEvent } from '@briq/shared/classes/briq-event';

@Component({
  selector: 'briq-file-upload',
  templateUrl: './briq-file-upload.component.html'
})
export class BriqFileUploadComponent {
  @Input() public formElement: BriqFileUploadBuilder;
  @Output() public upload: EventEmitter<BriqEvent>;

  private readonly uploadedFiles: any[];

  constructor() {
    this.upload = new EventEmitter<BriqEvent>();
    this.uploadedFiles = [];
  }

  public onSelect(event: any): void {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.upload.emit({
      action: 'upload',
      data: this.uploadedFiles
    });
  }
}
