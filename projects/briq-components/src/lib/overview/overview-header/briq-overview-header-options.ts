import { BriqEvent } from '../../shared/classes/briq-event';
import { BriqIconOptions } from '@briq/layout/briq-header/briq-header';
import { BriqMenuOption } from '@briq/UI-components/menu/briq-menu-option';
import { BriqSize } from '@briq/shared/classes/briq-size';
import { BriqFormElement, BriqInputBuilder } from '@briq/form/dynamic-form/shared/briq-form-element';

export interface BriqOverviewHeaderOptions {
  title: string;
  placeholder: string;
  showSearchbar: boolean;
  searchAction?: string;
  ats?: AtsOptions;
  dropdowns?: BriqDropdownItems[];
  inlineButton?: BriqEvent;
  inlineForm?: BriqFormElement;
  showLayoutSwitch?: boolean;
  button?: BriqEvent;
  layout?: BriqEvent;
}

export interface AtsOptions {
  button: BriqEvent;
  close?: BriqEvent;
  logo: string;
  logoWhite?: string;
  iconSize: BriqSize;
  syncTime: string | Date;
}

export interface BriqDropdownItems {
  label?: string;
  options?: BriqMenuOption[];
  iconOptions?: BriqIconOptions;
}
