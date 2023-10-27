import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { BriqSlider } from '@briq/slider/shared/briq-slider';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'briq-slider',
  templateUrl: './briq-slider.component.html',
  styleUrls: ['./briq-slider.component.scss']
})
export class BriqSliderComponent implements OnInit, OnDestroy {
  @Input() public slider: BriqSlider;
  public activeSlide: number;
  private subscription: Subscription;

  constructor(
    public briqEventService: BriqEventService,
    public router: Router
  ) {
    this.activeSlide = 0;
    this.subscription = new Subscription();
  }

  public ngOnInit(): void {
    this.eventListener();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public triggerAction(event: BriqEvent): void {
    this.briqEventService.triggerAction(event);
  }

  public nextSlide(slide?: number): void {
    this.activeSlide = slide;
  }

  private eventListener(): void {
    this.subscription.add(
      this.briqEventService.eventSubject$.subscribe((event: BriqEvent) => {
        switch (event.action) {
          case 'nextSlide':
            this.nextSlide(event.data);
            break;
          case 'next':
            this.router.navigate(this.slider.nextRoute);
            break;
        }
      })
    );
  }
}
