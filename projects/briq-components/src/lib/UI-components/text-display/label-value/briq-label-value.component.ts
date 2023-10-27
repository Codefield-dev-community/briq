import { Component, Input } from '@angular/core';
import { BriqLabelValue } from '../../../shared/classes/briq-label-value';

@Component({
  selector: 'briq-label-value',
  templateUrl: './briq-label-value.component.html',
  styleUrls: ['./briq-label-value.component.scss']
})
export class BriqLabelValueComponent {
  @Input() labelValue: BriqLabelValue;
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
}
