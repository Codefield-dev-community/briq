import { Component, Input } from '@angular/core';
import { AtsSystemContract } from '../../../../ats-systems/shared/ats-system.contract';
import { BriqDashboardService } from '@briq/dashboard/shared/briq-dashboard.service';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqJobTile } from '@briq/job-tile/shared/briq-job-tile';
import { BriqTile } from '@briq/tile/shared/briq-tile';
import { JobTileFormContract } from '../../../../jobs/shared/jobTileForm.contract';

@Component({
  selector: 'briq-dashboard',
  templateUrl: './briq-dashboard.component.html',
  styleUrls: ['./briq-dashboard.component.scss']
})
export class BriqDashboardComponent {
  @Input() public tiles: BriqTile[];
  @Input() public jobTiles: BriqJobTile[];
  @Input() public jobTilesForm: JobTileFormContract;
  @Input() public atsTiles: AtsSystemContract[];
  @Input() public showAtsTiles: boolean;
  @Input() public tableColumns: string[];
  @Input() public tableData: any[];
  @Input() public editMode: boolean;

  public layout: boolean;

  constructor(
    public briqDashboardService: BriqDashboardService,
    public briqEventService: BriqEventService
  ) {
    this.briqDashboardService.changeLayout$.subscribe((value) => {
      this.layout = value;
    });
    this.editMode = false;
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }
}
