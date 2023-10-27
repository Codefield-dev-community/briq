import { BriqIdentifier } from './briq-identifier';

export class BriqLabelValue {
  constructor(
    public label: string,
    public value: any,
    public id?: BriqIdentifier | string) {
  }
}
