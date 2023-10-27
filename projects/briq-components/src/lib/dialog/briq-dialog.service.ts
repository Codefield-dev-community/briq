import { Injectable } from '@angular/core';
import { BriqDialogComponent } from '@briq/dialog/dialog/briq-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BriqFormDialogComponent } from '@briq/dialog/briq-form-dialog/briq-form-dialog.component';
import { BriqFormDialogData } from '@briq/dialog/briq-form-dialog/briq-form-dialog-data.ts';
import { Observable } from 'rxjs';
import { BriqConfirmDialogComponent } from '@briq/dialog/briq-confirm-dialog/briq-confirm-dialog.component';
import { BriqConfirmDialogData } from '@briq/dialog/briq-confirm-dialog/briq-confirm-dialog-data.ts';

@Injectable({
  providedIn: 'root'
})
export class BriqDialogService {
  constructor(private dialog: MatDialog) {}

  public openDialog(): Observable<any> {
    const dialog = this.dialog.open(BriqDialogComponent);
    return dialog.afterClosed();
  }

  public openFormDialog(formData: BriqFormDialogData): Observable<any> {
    const dialog = this.dialog.open(BriqFormDialogComponent, {
      data: formData
    });
    return dialog.afterClosed();
  }

  public openConfirmDialog(data: BriqConfirmDialogData): Observable<boolean> {
    const dialog = this.dialog.open(BriqConfirmDialogComponent, { data });
    return dialog.afterClosed();
  }
}
