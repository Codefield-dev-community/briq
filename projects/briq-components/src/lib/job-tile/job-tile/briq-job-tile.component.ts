import { Component, Input, OnInit } from '@angular/core';
import { BriqJobTile } from '@briq/job-tile/shared/briq-job-tile';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { JobTileFormContract, LabelValueContract } from '../../../../jobs/shared/jobTileForm.contract';
import { BriqIconOptions } from '@briq/layout/briq-header/briq-header';
import { BriqSize } from '@briq/shared/classes/briq-size';
import { BriqFileUploadBuilder, BriqFormElement } from '@briq/form/dynamic-form/shared/briq-form-element';
import { EditJob } from '../../../../jobs/state/jobs.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'briq-job-tile',
  templateUrl: './briq-job-tile.component.html',
  styleUrls: ['./briq-job-tile.component.scss']
})
export class BriqJobTileComponent implements OnInit {
  @Input() public jobTile: BriqJobTile;
  @Input() public jobTileForm: JobTileFormContract;
  @Input() public editMode: boolean;

  public iconOptions: BriqIconOptions;
  public buttons: LabelValueContract[];
  public dropdownOptions: LabelValueContract[];
  public cardFlip: boolean;
  public uploadForm: BriqFormElement;

  constructor(
    public briqEventService: BriqEventService,
    private store: Store,
  ) {
    this.cardFlip = false;
    this.buttons = [
      { value: 'salary', label: 'Salaris' },
      { value: 'expirationdate', label: 'Verloopdatum' }
    ];
    this.dropdownOptions = [];
    this.iconOptions = {
      icon: 'chevron_s',
      iconSize: BriqSize.MEDIUM,
      rotate: false
    };
    this.uploadForm = new BriqFileUploadBuilder('jobImage', 'jobImage').setChooseIcon('fa-solid fa-pen fa-2xl');
  }

  public ngOnInit(): void {
    if (this.jobTile.salaryMin) {
      this.dropdownOptions.push({
        value: 'salary',
        label: `${this.jobTile.salaryMin} - ${this.jobTile.salaryMax} / ${this.jobTile.salaryPeriod}`
      });
    }

    if (this.jobTile.expirationDay) {
      this.dropdownOptions.push({
        value: 'expirationdate',
        label: `Vervalt ${this.jobTile.expirationDay}/${this.jobTile.expirationMonth}/${this.jobTile.expirationYear}`
      });
    }
  }

  public onCardFlip(jobTile: BriqJobTile): void {
    this.triggerAction({
      action: 'selectItem',
      label: this.buttons[0].label,
      data: { id: jobTile, value: this.buttons[0].value }
    });
    this.editMode = false;
    this.cardFlip = true;
  }

  public triggerAction(event: BriqEvent): void {
    switch (event.action) {
      case 'selectItem':
        switch (event.data.value) {
          case 'salary':
          case 'expirationdate':
            this.cardFlip = true;
            this.editMode = true;
            break;
        }
        break;
      case 'submit':
        this.cardFlip = false;
        break;
    }
    this.briqEventService.triggerAction(event);
  }

  public emptySalary(): void {
    this.jobTile.salaryMin = null;
    this.jobTile.salaryMax = null;
    this.jobTile.salaryPeriod = null;

    this.dropdownOptions = this.dropdownOptions.filter((item) => {
      return item.value !== 'salary';
    });

    const data = {
      id: this.jobTile.id,
      salaryMin: this.jobTile.salaryMin,
      salaryMax: this.jobTile.salaryMax,
      salaryPeriod: this.jobTile.salaryPeriod
    };

    this.store.dispatch(new EditJob(data.id, data));
  }

  public emptyExpirationDate(): void {
    this.jobTile.expirationDay = null;
    this.jobTile.expirationMonth = null;
    this.jobTile.expirationYear = null;

    this.dropdownOptions = this.dropdownOptions.filter((item) => {
      return item.value !== 'expirationdate';
    });

    this.store.dispatch(new EditJob(this.jobTile.id, { expireAt: null }));
  }

  public uploadFile(id: string, event: any): void {
    const [file] = event;

    this.briqEventService.triggerAction({
      action: 'updateImage',
      data: file,
      id
    });
  }
}
