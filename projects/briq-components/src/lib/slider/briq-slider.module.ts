import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqSliderComponent } from '@briq/slider/slider/briq-slider.component';
import { BriqListModule } from "@briq/UI-components/list/briq-list.module";
import { BriqButtonModule } from "@briq/UI-components/button/briq-button.module";
import { BriqSlideComponent } from "@briq/slider/slide/briq-slide.component";
import { BriqDynamicFormModule } from '@briq/form/dynamic-form/briq-dynamic-form.module'


@NgModule({
  declarations: [BriqSliderComponent, BriqSlideComponent, BriqSlideComponent],
  exports: [BriqSliderComponent],
  imports: [CommonModule, BriqListModule, BriqButtonModule, BriqDynamicFormModule]
})
export class BriqSliderModule {}
