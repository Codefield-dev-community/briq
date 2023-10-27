import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriqSearchbarComponent } from './searchbar/briq-searchbar.component';
import { BriqIconModule } from '../icon/briq-icon.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BriqSearchbarComponent],
  imports: [BriqIconModule, CommonModule, FormsModule],
  exports: [BriqSearchbarComponent]
})
export class BriqSearchModule {}
