import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BriqRangeSliderBuilder } from '@briq/form/dynamic-form/form-elements/range-slider/briq-range-slider-builder';

@Component({
  selector: 'briq-range-slider',
  templateUrl: './briq-range-slider.component.html'
})
export class BriqRangeSliderComponent implements OnInit {
  @Input() public formElement: BriqRangeSliderBuilder;
  @Output() public updateValue: EventEmitter<BriqRangeSliderBuilder>;

  constructor() {
    this.updateValue = new EventEmitter<BriqRangeSliderBuilder>();
  }

  public ngOnInit(): void {
    if (!this.formElement.value) {
      this.formElement.value = [
        this.formElement.min,
        this.formElement.max
      ];
    }

    this.onUpdateValue();
  }

  public onUpdateValue(): void {
    this.updateValue.emit(this.formElement);
  }
}
