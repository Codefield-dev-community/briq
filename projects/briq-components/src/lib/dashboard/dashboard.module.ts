import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqDashboardComponent } from '@briq/dashboard/dashboard/briq-dashboard.component';
import { BriqLoadingModule } from '@briq/UI-components/loading/briq-loading.module';
import { BriqTableModule } from '@briq/table/briq-table.module';
import { TileModule } from '@briq/tile/tile.module';
import { JobTileModule } from '@briq/job-tile/job-tile.module';

@NgModule({
  declarations: [BriqDashboardComponent],
  exports: [BriqDashboardComponent],
  imports: [CommonModule, BriqLoadingModule, TileModule, JobTileModule, BriqTableModule]
})
export class BriqDashboardModule {}
