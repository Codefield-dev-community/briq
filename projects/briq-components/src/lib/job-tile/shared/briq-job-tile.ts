import { BriqIdentifier } from '../../shared/classes/briq-identifier';
import { BriqLabelValue } from '@briq/shared/classes/briq-label-value';

export class BriqJobTile {
  public options: BriqLabelValue[];

  constructor(
    public declinedAmount: number,
    public id: BriqIdentifier,
    public image: string,
    public isActive: boolean,
    public status: string,
    public jobId: string,
    public position: string,
    public township: string,
    public qualifiedAmount: number,
    public expirationDay?: number,
    public expirationMonth?: number,
    public expirationYear?: number,
    public salaryMax?: number,
    public salaryMin?: number,
    public salaryPeriod?: string,
  ) {
  }

  public setOptions(options: BriqLabelValue[]): this {
    this.options = options;
    return this;
  }
}
