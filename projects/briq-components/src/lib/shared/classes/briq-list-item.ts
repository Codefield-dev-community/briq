import { BriqSidebarOverlay } from '@briq/questionnaire/shared/briq-sidebar-overlay';

export class BriqListItem {
  constructor(
    public id: string | number,
    public label: string,
    public overlayInfo: BriqSidebarOverlay,
    public icon?: string
  ) {}
}
