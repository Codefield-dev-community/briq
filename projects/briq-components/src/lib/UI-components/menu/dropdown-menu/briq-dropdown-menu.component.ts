import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BriqEvent } from '@briq/shared/classes/briq-event';
import { BriqMenuOption } from '@briq/UI-components/menu/briq-menu-option.ts';
import { BriqIconOptions } from '@briq/layout/briq-header/briq-header';
import { BriqSize } from '@briq/shared/classes/briq-size';

@Component({
  selector: 'briq-dropdown-menu',
  templateUrl: './briq-dropdown-menu.component.html',
  styleUrls: ['./briq-dropdown-menu.component.scss']
})
export class BriqDropdownMenuComponent implements OnInit {
  @Input() public label: string;
  @Input() public options: BriqMenuOption[];
  @Input() public iconOptions: BriqIconOptions;
  @Output() public select: EventEmitter<BriqEvent>;

  public toggle: boolean;
  public icon: string;
  public iconSize: BriqSize;
  public rotate: boolean;

  constructor() {
    this.toggle = false;
    this.icon = 'chevron_s';
    this.iconSize = BriqSize.XS;
    this.select = new EventEmitter<BriqEvent>();
    this.rotate = false;
  }

  public ngOnInit(): void {
    this.icon = this.iconOptions?.icon;
    this.iconSize = this.iconOptions?.iconSize;
    this.rotate = this.iconOptions?.rotate;
  }

  public onClick(option: BriqMenuOption): void {
    this.select.emit({
      action: option.value,
      data: option.data
    });
  }
}
