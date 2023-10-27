import { BriqInputBuilder } from '../form-elements/input/briq-input-builder';
import { BriqTextareaBuilder } from '../form-elements/textarea/textarea-builder';
import { BriqSelectBuilder } from '../form-elements/select/briq-select-builder';
import { BriqRepeaterBuilder } from '../form-elements/repeater/briq-repeater-builder';
import { BriqCheckboxBuilder } from '../form-elements/checkbox/briq-checkbox-builder';
import { BriqRangeSliderBuilder } from '@briq/form/dynamic-form/form-elements/range-slider/briq-range-slider-builder';
import { BriqFileUploadBuilder } from '@briq/form/dynamic-form/form-elements/file-upload/briq-file-upload-builder';

export type BriqFormElement =
  | BriqCheckboxBuilder
  | BriqFileUploadBuilder
  | BriqInputBuilder
  | BriqRangeSliderBuilder
  | BriqRepeaterBuilder
  | BriqSelectBuilder
  | BriqTextareaBuilder;
export {
  BriqCheckboxBuilder,
  BriqFileUploadBuilder,
  BriqInputBuilder,
  BriqRangeSliderBuilder,
  BriqRepeaterBuilder,
  BriqSelectBuilder,
  BriqTextareaBuilder
};
