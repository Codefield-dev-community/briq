import { BriqIdentifier } from './briq-identifier';

export class BriqLink {
  public icon: string;

  constructor(public id: BriqIdentifier, public label: string, public routerLink: string[]) {}

  public setIcon(icon: string): BriqLink {
    this.icon = icon;
    return this;
  }
}
