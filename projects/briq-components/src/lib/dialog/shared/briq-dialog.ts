import { MatDialogRef } from '@angular/material/dialog';
import { BriqFormDialogComponent } from '@briq/dialog/briq-form-dialog/briq-form-dialog.component';
import { BriqDialogComponent } from '@briq/dialog/dialog/briq-dialog.component';
import { BriqConfirmDialogComponent } from '@briq/dialog/briq-confirm-dialog/briq-confirm-dialog.component';
import { BriqSize } from '@briq/shared/classes/briq-size';

export type dialogTypes = BriqFormDialogComponent | BriqDialogComponent | BriqConfirmDialogComponent;

export class BriqDialog {
  public title: string;
  public sizeOptions: typeof BriqSize;

  constructor(public dialogRef: MatDialogRef<dialogTypes>) {
    this.sizeOptions = BriqSize;
  }

  public close(): void {
    this.dialogRef.close();
  }

  public confirm(dialogData: any): void {
    if (dialogData) {
      this.dialogRef.close(dialogData);
    } else {
      this.close();
    }
  }
}
