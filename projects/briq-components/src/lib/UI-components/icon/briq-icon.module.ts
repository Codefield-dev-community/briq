import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqIconButtonComponent } from './icon-button/briq-icon-button.component';
import { BriqIconComponent } from './icon/briq-icon.component';

@NgModule({
  declarations: [BriqIconComponent, BriqIconButtonComponent],
  imports: [CommonModule],
  exports: [BriqIconComponent, BriqIconButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BriqIconModule {}
