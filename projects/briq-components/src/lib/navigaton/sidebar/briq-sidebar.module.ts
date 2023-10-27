import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BriqSidebarComponent } from './briq-sidebar.component';
import { BriqIconModule } from '../../UI-components/icon/briq-icon.module';
import { BriqMenuItemComponent } from './menu-item/briq-menu-item.component';

@NgModule({
  declarations: [BriqSidebarComponent, BriqMenuItemComponent],
  imports: [CommonModule, BriqIconModule, RouterModule],
  exports: [BriqSidebarComponent, BriqMenuItemComponent]
})
export class BriqSidebarModule {}
