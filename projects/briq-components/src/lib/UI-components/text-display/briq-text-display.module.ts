import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqLabelValueComponent } from './label-value/briq-label-value.component';

@NgModule({
  declarations: [BriqLabelValueComponent],
  exports: [BriqLabelValueComponent],
  imports: [CommonModule]
})
export class BriqTextDisplayModule {}
