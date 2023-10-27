import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqJobTileComponent } from '@briq/job-tile/job-tile/briq-job-tile.component';
import { BriqButtonModule } from '@briq/UI-components/button/briq-button.module';
import { BriqMenuModule } from '@briq/UI-components/menu/briq-menu.module';
import { BriqTextDisplayModule } from '@briq/UI-components/text-display/briq-text-display.module';
import { RouterModule } from '@angular/router';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';
import { BriqDynamicFormModule } from '@briq/form/dynamic-form/briq-dynamic-form.module';

@NgModule({
  declarations: [BriqJobTileComponent],
  exports: [BriqJobTileComponent],
  imports: [
    CommonModule,
    BriqButtonModule,
    BriqMenuModule,
    BriqTextDisplayModule,
    RouterModule,
    BriqIconModule,
    BriqDynamicFormModule
  ]
})
export class JobTileModule {}
