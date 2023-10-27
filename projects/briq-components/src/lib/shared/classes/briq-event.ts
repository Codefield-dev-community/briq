import { BriqIdentifier } from './briq-identifier';

export interface BriqEvent {
  action: any;
  label?: string;
  data?: any;
  id?: BriqIdentifier;
}
