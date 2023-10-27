import { BriqConfirmTypes } from '@briq/dialog/briq-confirm-dialog/briq-confirm-types';

export interface BriqConfirmDialogData {
  title: string;
  message: string;
  type: BriqConfirmTypes;
}
