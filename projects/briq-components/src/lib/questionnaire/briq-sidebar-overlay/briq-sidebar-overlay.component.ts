import { Component } from '@angular/core';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqEventService } from '@briq/shared/services/briq-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'briq-sidebar-overlay',
  templateUrl: './briq-sidebar-overlay.component.html',
  styleUrls: ['./briq-sidebar-overlay.component.scss']
})
export class BriqSidebarOverlayComponent {
  public collapsed: boolean;
  public title: string;
  public body: string;
  public position: 'left' | 'right';
  private subscription: Subscription;

  constructor(
    public briqEventService: BriqEventService
  ) {
    this.subscription = new Subscription();
    this.collapsed = true;
    this.title = null;
    this.body = null;
    this.position = 'left';
    this.eventListener();
  }

  private eventListener(): void {
    this.subscription.add(
      this.briqEventService.eventSubject$.subscribe((event: BriqEvent) => {
        switch (event.action) {
          case 'triggerOverlay':
            this.collapsed = false;
            this.title = event.data.title;
            this.body = event.data.body;
            this.position = event.data?.position || 'left';
            break;
        }
      })
    );
  }
}
