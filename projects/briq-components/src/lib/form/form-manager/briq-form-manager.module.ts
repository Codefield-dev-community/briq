import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqFormManagerComponent } from './briq-form-manager/briq-form-manager.component';
import { BriqDynamicFormModule } from '../dynamic-form/briq-dynamic-form.module';
import { BriqFormElementManagerComponent } from './form-element-manager/briq-form-element-manager.component';
import { BriqButtonModule } from '../../UI-components/button/briq-button.module';
import { BriqPageModule } from '../../layout/page/briq-page.module';
import { BriqIconModule } from '../../UI-components/icon/briq-icon.module';
import { BriqDialogModule } from '../../dialog/briq-dialog.module';

@NgModule({
  declarations: [BriqFormManagerComponent, BriqFormElementManagerComponent],
  imports: [BriqDynamicFormModule, BriqButtonModule, CommonModule, BriqPageModule, BriqIconModule, BriqDialogModule],
  exports: [BriqFormManagerComponent, BriqFormElementManagerComponent]
})
export class BriqFormManagerModule {}
