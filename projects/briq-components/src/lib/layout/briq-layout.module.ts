import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqHeaderComponent } from './briq-header/briq-header.component';
import { BriqButtonModule } from '@briq/UI-components/button/briq-button.module';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';
import { BriqMenuModule } from '@briq/UI-components/menu/briq-menu.module';

@NgModule({
  declarations: [BriqHeaderComponent],
  imports: [CommonModule, BriqButtonModule, BriqIconModule, BriqMenuModule],
  exports: [BriqHeaderComponent]
})
export class BriqLayoutModule {}
