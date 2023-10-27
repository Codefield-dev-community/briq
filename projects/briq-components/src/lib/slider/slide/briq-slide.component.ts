import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { BriqSlide } from '@briq/slider/shared/briq-slide';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { Subscription } from 'rxjs';
import { BriqDynamicFormComponent } from '@briq/form/dynamic-form/dynamic-form/briq-dynamic-form.component';

@Component({
  selector: 'briq-slide',
  templateUrl: './briq-slide.component.html',
  styleUrls: ['./briq-slide.component.scss']
})
export class BriqSlideComponent implements OnDestroy {
  @Input() public slide: BriqSlide;
  @ViewChild('form') public form: BriqDynamicFormComponent;

  private subscription: Subscription;

  constructor(public briqEventService: BriqEventService) {
    this.subscription = new Subscription();
    this.eventListener();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction({
      action: 'slideFormSubmit',
      data: event
    });
  }

  private eventListener(): void {
    this.subscription.add(
      this.briqEventService.eventSubject$.subscribe((event: BriqEvent) => {
        switch (event.action) {
          case 'nextSlide':
            if (this.form) {
              this.form.triggerSubmit();
            }
            break;
        }
      })
    );
  }
}
