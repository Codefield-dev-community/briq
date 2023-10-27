import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BriqEvent } from '../../shared/classes/briq-event';
import { BriqOverviewHeaderOptions } from './briq-overview-header-options';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqDashboardService } from '@briq/dashboard/shared/briq-dashboard.service';
import { DateService } from '@shared/services/date.service';

@Component({
  selector: 'briq-overview-header',
  templateUrl: './briq-overview-header.component.html',
  styleUrls: ['./briq-overview-header.component.scss']
})
export class BriqOverviewHeaderComponent implements OnInit, OnDestroy {
  @Input() public options: BriqOverviewHeaderOptions;

  public switchIcon: boolean;
  public layout: boolean;
  public icon: string;
  public dateTimeFormat: string;

  private subscription: Subscription;

  constructor(
    private briqEventService: BriqEventService,
    private briqDashboardService: BriqDashboardService,
    private dateService: DateService
  ) {
    this.subscription = new Subscription();
    this.briqDashboardService.changeLayout$.next(true);
    this.switchIcon = false;
    this.dateTimeFormat = this.dateService.defaultDateTimeFormat;
  }

  public ngOnInit(): void {
    this.subscription.add(
      this.briqDashboardService.changeLayout$.subscribe((value) => {
        this.layout = value;
      })
    );
    this.options.searchAction = 'search';
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }
}
