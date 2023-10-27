import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqTileComponent } from '@briq/tile/tile/briq-tile.component';
import { BriqButtonModule } from '@briq/UI-components/button/briq-button.module';
import { BriqMenuModule } from '@briq/UI-components/menu/briq-menu.module';
import { BriqTextDisplayModule } from '@briq/UI-components/text-display/briq-text-display.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BriqTileComponent],
  exports: [BriqTileComponent],
  imports: [CommonModule, BriqButtonModule, BriqMenuModule, BriqTextDisplayModule, RouterModule]
})
export class TileModule {}
