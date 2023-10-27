import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';

export class BriqQuestionnaireResultItem {
  constructor(public id: BriqIdentifier, public question: string, public value: any, public description?: string) {}
}
