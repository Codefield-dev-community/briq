import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqOverviewHeaderComponent } from './overview-header/briq-overview-header.component';
import { BriqSearchModule } from '../UI-components/search/briq-search.module';
import { BriqButtonModule } from '../UI-components/button/briq-button.module';
import { RouterModule } from '@angular/router';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';
import { BriqMenuModule } from '@briq/UI-components/menu/briq-menu.module';
import { BriqDynamicFormModule } from '@briq/form/dynamic-form/briq-dynamic-form.module';

@NgModule({
  declarations: [BriqOverviewHeaderComponent],
  imports: [
    BriqSearchModule,
    BriqButtonModule,
    CommonModule,
    RouterModule,
    BriqIconModule,
    BriqMenuModule,
    BriqDynamicFormModule
  ],
  exports: [BriqOverviewHeaderComponent]
})
export class BriqOverviewModule {}
