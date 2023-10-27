import { BriqLabelValue } from '../../shared/classes/briq-label-value';
import { BriqGridOverviewColumnType } from '@briq/overview/shared/briq-grid-overview-type';
import { BriqActionIcon } from '@briq/shared/classes/briq-action-icon';

export class BriqGridOverviewColumn extends BriqLabelValue {
  public action?: string;
  public type: BriqGridOverviewColumnType = BriqGridOverviewColumnType.Default;
  public link: string[];
  public icons: BriqActionIcon[];

  setAction(action: string): BriqGridOverviewColumn {
    this.action = action;
    this.type = BriqGridOverviewColumnType.Action;
    return this;
  }

  setActionIcons(icons: BriqActionIcon[]): BriqGridOverviewColumn {
    this.icons = icons;
    this.type = BriqGridOverviewColumnType.Icons;
    return this;
  }

  setLink(link: string[]): BriqGridOverviewColumn {
    this.link = link;
    this.type = BriqGridOverviewColumnType.Link;
    return this;
  }
}
