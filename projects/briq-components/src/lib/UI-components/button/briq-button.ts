import { BriqIdentifier } from '@briq/shared/classes/briq-identifier';
import { BriqEvent } from '@briq/shared/classes/briq-event';

export type BriqButtonType = 'primary' | 'secondary' | 'quaternary' | 'warning' | 'grey' | 'white' | 'outline' | 'hidden' | 'submit' | 'cancel';
export type BriqButtonWidth = 'fullwidth' | 'regular';

export interface BriqButton {
  label: string;
  type?: BriqButtonType;
  disabled?: boolean;
  hidden?: boolean;
  action?: BriqEvent;
  width?: BriqButtonWidth;
  id?: BriqIdentifier;
}

export class BriqButtonBuilder {
  type: BriqButtonType;
  disabled: boolean;
  hidden: boolean;
  action: BriqEvent;
  width: BriqButtonWidth;
  id: BriqIdentifier;

  constructor(public label: string) {}

  setType(type: BriqButtonType): BriqButtonBuilder {
    this.type = type;
    return this;
  }

  setDisabled(disabled: boolean): BriqButtonBuilder {
    this.disabled = disabled;
    return this;
  }

  setHidden(hidden: boolean): BriqButtonBuilder {
    this.hidden = hidden;
    return this;
  }

  setAction(action: BriqEvent): BriqButtonBuilder {
    this.action = action;
    return this;
  }

  setWidth(width: BriqButtonWidth): BriqButtonBuilder {
    this.width = width;
    return this;
  }

  setId(id: BriqIdentifier): BriqButtonBuilder {
    this.id = id;
    return this;
  }
}
