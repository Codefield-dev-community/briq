import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqTableComponent } from '@briq/table/table/briq-table.component';
import { BriqMenuModule } from '@briq/UI-components/menu/briq-menu.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [BriqTableComponent],
  exports: [BriqTableComponent],
  imports: [CommonModule, TableModule, BriqMenuModule ]
})
export class BriqTableModule {}
