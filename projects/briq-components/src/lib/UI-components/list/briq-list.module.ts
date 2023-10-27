import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqListItemComponent } from '@briq/UI-components/list/list-item/briq-list-item.component';
import { RouterModule } from '@angular/router';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';

@NgModule({
  declarations: [BriqListItemComponent],
  imports: [CommonModule, RouterModule, BriqIconModule],
  exports: [BriqListItemComponent]
})
export class BriqListModule {}
