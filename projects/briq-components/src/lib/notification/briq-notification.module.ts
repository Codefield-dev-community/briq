import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqErrorComponent } from './error/briq-error.component';
import { BriqIconModule } from '../UI-components/icon/briq-icon.module';

@NgModule({
  declarations: [BriqErrorComponent],
  exports: [BriqErrorComponent],
  imports: [CommonModule, BriqIconModule]
})
export class BriqNotificationModule {}
