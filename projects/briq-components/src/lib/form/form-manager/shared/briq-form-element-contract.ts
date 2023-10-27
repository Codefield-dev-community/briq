import { BriqLabelValue } from '../../../shared/classes/briq-label-value';
import { BriqFormElementType } from '../../dynamic-form/shared/briq-form-element-type';

export interface BriqFormElementContract {
  name: string;
  label: string;
  type: BriqFormElementType;
  required: boolean;
  description?: string;
  options?: BriqLabelValue[];
}
