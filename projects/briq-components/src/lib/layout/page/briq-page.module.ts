import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqPageComponent } from '@briq/layout/page/briq-page.component';

@NgModule({
  declarations: [BriqPageComponent],
  imports: [CommonModule],
  exports: [BriqPageComponent]
})
export class BriqPageModule {}
