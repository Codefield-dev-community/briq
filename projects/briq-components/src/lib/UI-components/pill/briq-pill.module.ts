import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqPillComponent } from './briq-pill.component';

@NgModule({
  declarations: [BriqPillComponent],
  exports: [BriqPillComponent],
  imports: [CommonModule]
})
export class BriqPillModule {}
