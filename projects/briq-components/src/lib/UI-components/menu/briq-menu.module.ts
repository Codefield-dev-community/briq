import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqDropdownMenuComponent } from '@briq/UI-components/menu/dropdown-menu/briq-dropdown-menu.component.ts';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';
import { BriqDynamicFormModule } from '@briq/form/dynamic-form/briq-dynamic-form.module';
import { BriqClickOutsideDirective } from '@briq/shared/directives/briq-click-outside.directive';

@NgModule({
  declarations: [BriqDropdownMenuComponent, BriqClickOutsideDirective],
  imports: [CommonModule, BriqIconModule, BriqDynamicFormModule],
  exports: [BriqDropdownMenuComponent, BriqClickOutsideDirective]
})
export class BriqMenuModule {}
