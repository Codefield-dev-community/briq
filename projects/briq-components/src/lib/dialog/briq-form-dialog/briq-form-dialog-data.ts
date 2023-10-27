import { BriqFormElement } from '@briq/form/dynamic-form/shared/briq-form-element';
import { BriqSize } from '@briq/shared/classes/briq-size';

export interface BriqFormDialogData {
  title: string;
  formElements: BriqFormElement[];
  type?: string;
  size?: BriqSize;
}
