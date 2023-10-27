import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqDialogComponent } from './dialog/briq-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BriqFormDialogComponent } from './briq-form-dialog/briq-form-dialog.component';
import { BriqDynamicFormModule } from '@briq/form/dynamic-form/briq-dynamic-form.module';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';
import { BriqButtonModule } from '@briq/UI-components/button/briq-button.module';
import { BriqConfirmDialogComponent } from './briq-confirm-dialog/briq-confirm-dialog.component';

@NgModule({
  declarations: [BriqDialogComponent, BriqFormDialogComponent, BriqConfirmDialogComponent],
  imports: [MatDialogModule, CommonModule, BriqDynamicFormModule, BriqIconModule, BriqButtonModule],
  exports: [BriqDialogComponent],
  entryComponents: [BriqDialogComponent, BriqFormDialogComponent]
})
export class BriqDialogModule {}
