import { Component } from '@angular/core';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
  selector: 'briq-load-indicator',
  templateUrl: './briq-load-indicator.component.html',
  styleUrls: ['./briq-load-indicator.component.scss']
})
export class BriqLoadIndicatorComponent {
  public iconSize: BriqSize;

  constructor() {
    this.iconSize = BriqSize.XL;
  }
}
