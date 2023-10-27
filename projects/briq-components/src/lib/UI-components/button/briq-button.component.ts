import { Component, Input } from '@angular/core';
import { BriqButtonType, BriqButtonWidth } from '@briq/UI-components/button/briq-button';
import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';

@Component({
  selector: 'briq-button',
  templateUrl: './briq-button.component.html',
  styleUrls: ['./briq-button.component.scss']
})
export class BriqButtonComponent {
  @Input() disabled: boolean;
  @Input() identifier: BriqIdentifier;
  @Input() type: BriqButtonType;
  @Input() width: BriqButtonWidth;

  // @TODO not implemented yet
  preventClick(event: MouseEvent) {
    if (this.disabled || this.type === 'hidden') {
      event.stopPropagation();
    }
  }
}
