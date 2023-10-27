import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqBasicCheckboxComponent } from './briq-basic-checkbox/briq-basic-checkbox.component';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';

@NgModule({
  declarations: [BriqBasicCheckboxComponent],
  imports: [CommonModule, BriqIconModule],
  exports: [BriqBasicCheckboxComponent]
})
export class BriqCheckboxModule {}
