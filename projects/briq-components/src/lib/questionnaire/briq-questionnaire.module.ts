import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BriqQuestionnaireHeaderComponent } from './header/briq-questionnaire-header.component';
import { BriqQuestionnaireFooterComponent } from './footer/briq-questionnaire-footer.component';
import { BriqQuestionnaireStepComponent } from './briq-questionnaire-step/briq-questionnaire-step.component';
import { BriqQuestionnaireResultComponent } from './briq-questionnaire-result/briq-questionnaire-result.component';
import { BriqQuestionnaireComponent } from '@briq/questionnaire/briq-questionnaire/briq-questionnaire.component';
import { BriqIconModule } from '@briq/UI-components/icon/briq-icon.module';
import { BriqDynamicFormModule } from '@briq/form/dynamic-form/briq-dynamic-form.module';
import { BriqButtonModule } from '@briq/UI-components/button/briq-button.module';
import { BriqSidebarModule } from '@briq/navigaton/sidebar/briq-sidebar.module';
import { BriqQuestionnaireQaComponent } from '@briq/questionnaire/briq-questionnaire-qa/briq-questionnaire-qa.component';
import { BriqQuestionnaireExplanationComponent } from './briq-questionnaire-explanation/briq-questionnaire-explanation.component';
import { BriqListModule } from '@briq/UI-components/list/briq-list.module';
import { BriqSidebarOverlayComponent } from './briq-sidebar-overlay/briq-sidebar-overlay.component';
import { BriqSliderModule } from '@briq/slider/briq-slider.module'

@NgModule({
  declarations: [
    BriqQuestionnaireComponent,
    BriqQuestionnaireHeaderComponent,
    BriqQuestionnaireFooterComponent,
    BriqQuestionnaireStepComponent,
    BriqQuestionnaireResultComponent,
    BriqQuestionnaireQaComponent,
    BriqQuestionnaireExplanationComponent,
    BriqSidebarOverlayComponent
  ],
  imports: [
    CommonModule,
    BriqButtonModule,
    BriqDynamicFormModule,
    BriqIconModule,
    BriqSidebarModule,
    RouterModule,
    BriqListModule,
    BriqSliderModule
  ],
  exports: [
    BriqQuestionnaireComponent,
    BriqQuestionnaireResultComponent,
    BriqQuestionnaireStepComponent,
    BriqQuestionnaireQaComponent,
    BriqQuestionnaireHeaderComponent,
    BriqQuestionnaireExplanationComponent,
    BriqSidebarOverlayComponent
  ]
})
export class BriqQuestionnaireModule {}
