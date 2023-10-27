import { Component, Input } from '@angular/core';
import { BriqDialog } from '@briq/dialog/shared/briq-dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
  selector: 'briq-dialog',
  templateUrl: './briq-dialog.component.html',
  styleUrls: ['./briq-dialog.component.scss']
})
export class BriqDialogComponent extends BriqDialog {
  @Input() public title: string;
  @Input() public size: BriqSize;

  constructor(public dialogRef: MatDialogRef<BriqDialogComponent>) {
    super(dialogRef);
    this.size = BriqSize.LARGE;
  }
}
