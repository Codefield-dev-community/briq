import { Component, Input } from '@angular/core';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
  selector: 'briq-icon',
  templateUrl: './briq-icon.component.html',
  styleUrls: ['./briq-icon.component.scss']
})
export class BriqIconComponent {
  @Input() public icon: string;
  @Input() public debug?: boolean;
  @Input() public size: BriqSize;

  public sizes = BriqSize;
}
