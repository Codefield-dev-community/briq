import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BriqLoginComponent } from './login/briq-login.component';
import { BriqButtonModule } from '../UI-components/button/briq-button.module';
import { BriqNotificationModule } from '../notification/briq-notification.module';
import { BriqDynamicFormModule } from '../form/dynamic-form/briq-dynamic-form.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BriqLayoutModule } from '@briq/layout/briq-layout.module'
import { BriqQuestionnaireModule } from '@briq/questionnaire/briq-questionnaire.module'
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module'

@NgModule({
    declarations: [BriqLoginComponent, ForgotPasswordComponent],
    exports: [BriqLoginComponent],
    imports: [
        BriqDynamicFormModule,
        BriqButtonModule,
        CommonModule,
        BriqNotificationModule,
        HttpClientModule,
        RouterModule,
        BriqLayoutModule,
        BriqQuestionnaireModule,
        BriqIconModule
    ]
})
export class BriqAuthenticationModule {
}
