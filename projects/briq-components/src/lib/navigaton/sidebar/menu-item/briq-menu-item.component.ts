import { Component, Input } from '@angular/core';
import { BriqMenuItem } from '../../../shared/classes/briq-menu-item';

@Component({
  selector: 'briq-menu-item',
  templateUrl: './briq-menu-item.component.html',
  styleUrls: ['./briq-menu-item.component.scss']
})
export class BriqMenuItemComponent {
  @Input() item: BriqMenuItem;

  get activeState(): string | void {
    const activeRoute = window.location.pathname;

    if (this.item.url === '/') {
      this.item.url = '';
    }

    if (activeRoute.substring(1) === this.item.url) {
      return 'active';
    }
  }
}
