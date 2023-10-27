import { Injectable } from '@angular/core';
import { BriqQuestionnaireStep } from '@briq/questionnaire/shared/briq-questionnaire-step';

@Injectable({
  providedIn: 'root'
})
export class BriqQuestionnaireService {
  public steps: BriqQuestionnaireStep[];
  public slide: string;
  public values: any;

  constructor() {
    this.steps = [];
    this.slide = null;
    this.values = {};
  }

  public nextSlide(slide: string): string {
    return this.slide = 'slide';
  }

  public registerStep(step: BriqQuestionnaireStep): void {
    this.steps.push(step);
  }

  public saveStepInput(data: any, setLocalStorage = true): void {
    if (setLocalStorage) {
      sessionStorage.setItem('briq_questionnaire', JSON.stringify(data));
    }
    this.values = { ...this.values, ...data };
  }

  public getValues(): any {
    if (Object.keys(this.values).length === 0) {
      const values = sessionStorage.getItem('briq_questionnaire');
      if (values) {
        this.values = JSON.parse(values);
      }
    }

    return this.values;
  }

  public clearSteps(): void {
    sessionStorage.removeItem('briq_questionnaire');
    this.steps = [];
    this.values = {};
  }
}
