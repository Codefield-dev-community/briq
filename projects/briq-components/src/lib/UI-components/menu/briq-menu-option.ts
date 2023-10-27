import { BriqLabelValue } from '@briq/shared/classes/briq-label-value';

export class BriqMenuOption extends BriqLabelValue {
  constructor(label: string, value: string, public data?: any) {
    super(label, value);
  }
}
