import { Component, Inject } from '@angular/core';
import { BriqDialog } from '@briq/dialog/shared/briq-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BriqDialogComponent } from '@briq/dialog/dialog/briq-dialog.component';
import { BriqConfirmTypes } from '@briq/dialog/briq-confirm-dialog/briq-confirm-types';
import { BriqConfirmDialogData } from '@briq/dialog/briq-confirm-dialog/briq-confirm-dialog-data.ts';

@Component({
  selector: 'app-briq-confirm-dialog',
  templateUrl: './briq-confirm-dialog.component.html',
  styleUrls: ['./briq-confirm-dialog.component.scss']
})
export class BriqConfirmDialogComponent extends BriqDialog {
  public message: string;
  public type: BriqConfirmTypes;

  constructor(@Inject(MAT_DIALOG_DATA) data: BriqConfirmDialogData, dialogRef: MatDialogRef<BriqDialogComponent>) {
    super(dialogRef);
    this.setData(data);
  }

  private setData(data: BriqConfirmDialogData): void {
    if (data) {
      this.title = data.title;
      this.message = data.message;
      this.type = data.type;
    }
  }
}
