import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BriqFormElement } from '@briq/form/dynamic-form/shared/briq-form-element';
import { BriqFormDialogData } from '@briq/dialog/briq-form-dialog/briq-form-dialog-data';
import { BriqDialog } from '@briq/dialog/shared/briq-dialog';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
  selector: 'briq-form-dialog',
  templateUrl: './briq-form-dialog.component.html',
  styleUrls: ['./briq-form-dialog.component.scss']
})
export class BriqFormDialogComponent extends BriqDialog {
  public title: string;
  public formElements: BriqFormElement[];
  public type: string;
  public size: BriqSize;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BriqFormDialogData,
    public dialogRef: MatDialogRef<BriqFormDialogComponent>
  ) {
    super(dialogRef);
    this.setData(data);
  }

  private setData(data: BriqFormDialogData): void {
    if (data) {
      this.title = data.title;
      this.formElements = data.formElements;
      this.type = data.type;
      this.size = data.size;
    }
  }
}
