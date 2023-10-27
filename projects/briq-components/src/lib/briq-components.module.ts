import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqSidebarModule } from './navigaton/sidebar/briq-sidebar.module';
import { BriqButtonModule } from './UI-components/button/briq-button.module';
import { BriqIconModule } from './UI-components/icon/briq-icon.module';
import { BriqPillModule } from './UI-components/pill/briq-pill.module';
import { BriqQuestionnaireModule } from './questionnaire/briq-questionnaire.module';
import { BriqAuthenticationModule } from './authentication/briq-authentication.module';
import { BriqNotificationModule } from './notification/briq-notification.module';
import { BriqFormManagerModule } from './form/form-manager/briq-form-manager.module';
import { BriqDynamicFormModule } from './form/dynamic-form/briq-dynamic-form.module';
import { BriqLayoutModule } from './layout/briq-layout.module';
import { BriqPageModule } from './layout/page/briq-page.module';
import { BriqDialogModule } from './dialog/briq-dialog.module';
import { BriqSearchModule } from './UI-components/search/briq-search.module';
import { BriqOverviewModule } from './overview/briq-overview.module';
import { BriqDashboardModule } from '@briq/dashboard/dashboard.module';
import { BriqLoadingModule } from '@briq/UI-components/loading/briq-loading.module.ts';
import { BriqCheckboxModule } from '@briq/UI-components/checkbox/checkbox.module';
import { BriqMenuModule } from '@briq/UI-components/menu/briq-menu.module';
import { BriqListModule } from '@briq/UI-components/list/briq-list.module';
import { ConcatPipe } from '@briq/shared/pipes/concat.pipe';

@NgModule({
  imports: [
    CommonModule,
    BriqAuthenticationModule,
    BriqButtonModule,
    BriqCheckboxModule,
    BriqDashboardModule,
    BriqDialogModule,
    BriqDynamicFormModule,
    BriqFormManagerModule,
    BriqIconModule,
    BriqLayoutModule,
    BriqListModule,
    BriqLoadingModule,
    BriqMenuModule,
    BriqNotificationModule,
    BriqOverviewModule,
    BriqPageModule,
    BriqPillModule,
    BriqQuestionnaireModule,
    BriqSearchModule,
    BriqSidebarModule,
  ],
  exports: [
    BriqAuthenticationModule,
    BriqButtonModule,
    BriqCheckboxModule,
    BriqDashboardModule,
    BriqDialogModule,
    BriqDynamicFormModule,
    BriqFormManagerModule,
    BriqIconModule,
    BriqLayoutModule,
    BriqListModule,
    BriqLoadingModule,
    BriqMenuModule,
    BriqNotificationModule,
    BriqOverviewModule,
    BriqPageModule,
    BriqPillModule,
    BriqQuestionnaireModule,
    BriqSearchModule,
    BriqSidebarModule,
    ConcatPipe,
  ],
  declarations: [ConcatPipe]
})
export class BriqComponentsModule {}
