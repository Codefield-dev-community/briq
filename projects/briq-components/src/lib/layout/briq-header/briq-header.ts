import { BriqSize } from '@briq/shared/classes/briq-size';
import { BriqEvent } from '@briq/shared/classes/briq-event';

export interface BriqHeader {
  company: { name: string; logo?: string };
  user: { name: string; avatar?: string };
  iconOptions?: BriqIconOptions;
  menuOptions: BriqEvent[];
}

export interface BriqIconOptions {
  icon: string;
  iconSize?: BriqSize;
  rotate?: boolean;
}
