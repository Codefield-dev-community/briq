import { Component, Input } from '@angular/core';

@Component({
  selector: 'briq-qa',
  templateUrl: './briq-questionnaire-qa.component.html'
})
export class BriqQuestionnaireQaComponent {
  @Input() public question: string;
  @Input() public answer: string;
}
