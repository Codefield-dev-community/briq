import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqLoadIndicatorComponent } from '@briq/UI-components/loading/load-indicator/briq-load-indicator.component.ts';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';

@NgModule({
  declarations: [BriqLoadIndicatorComponent],
  imports: [CommonModule, BriqIconModule],
  exports: [BriqLoadIndicatorComponent]
})
export class BriqLoadingModule {}
