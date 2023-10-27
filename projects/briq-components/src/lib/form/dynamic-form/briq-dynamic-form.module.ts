import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { BriqDynamicFormComponent } from './dynamic-form/briq-dynamic-form.component';
import { BriqDynamicFormElementComponent } from './dynamic-form-element/briq-dynamic-form-element.component';
import { BriqFormElementComponent } from './form-elements/form-element/briq-form-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BriqInputComponent } from './form-elements/input/briq-input.component';
import { BriqCheckboxComponent } from './form-elements/checkbox/briq-checkbox.component';
import { BriqTextareaComponent } from './form-elements/textarea/briq-textarea.component';
import { BriqSelectComponent } from './form-elements/select/briq-select.component';
import { BriqRepeaterComponent } from './form-elements/repeater/briq-repeater.component';
import { BriqIconModule } from '../../UI-components/icon/briq-icon.module';
import { BriqNotificationModule } from '../../notification/briq-notification.module';
import { BriqSearchModule } from '../../UI-components/search/briq-search.module';
import { BriqHiddenComponent } from './form-elements/briq-hidden/briq-hidden.component';
import { BriqButtonModule } from '@briq/UI-components/button/briq-button.module';
import { BriqCheckboxModule } from '@briq/UI-components/checkbox/checkbox.module';
import { BriqScrolltoInvalidcontrolDirective } from '@briq/shared/directives/briq-scrollto-invalidcontrol.directive';
import { BriqRangeSliderComponent } from './form-elements/range-slider/briq-range-slider.component';
import { SliderModule } from 'primeng/slider';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BriqCurrencyInputComponent } from './form-elements/currency-input/briq-currency-input.component';
import { BriqCalendarComponent } from '@briq/form/dynamic-form/form-elements/calendar/briq-calendar/briq-calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { BriqFileUploadComponent } from './form-elements/file-upload/briq-file-upload.component';
import { FileUploadModule } from 'primeng/fileupload';


registerLocaleData(localeNl, 'nl');

@NgModule({
  declarations: [
    BriqCalendarComponent,
    BriqCheckboxComponent,
    BriqCurrencyInputComponent,
    BriqDynamicFormComponent,
    BriqDynamicFormElementComponent,
    BriqFormElementComponent,
    BriqHiddenComponent,
    BriqInputComponent,
    BriqRangeSliderComponent,
    BriqRepeaterComponent,
    BriqScrolltoInvalidcontrolDirective,
    BriqSelectComponent,
    BriqTextareaComponent,
    BriqFileUploadComponent
  ],
  exports: [BriqDynamicFormComponent, BriqDynamicFormElementComponent, BriqInputComponent],
  imports: [
    BriqButtonModule,
    BriqCheckboxModule,
    BriqIconModule,
    BriqNotificationModule,
    BriqSearchModule,
    CommonModule,
    CurrencyMaskModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule,
    CalendarModule,
    FileUploadModule
  ]
})
export class BriqDynamicFormModule {}
