import { Component, Input, OnInit } from '@angular/core';
import { BriqHiddenBuilder } from '@briq/form/dynamic-form/form-elements/briq-hidden/briq-hidden-builder';

@Component({
  selector: 'briq-hidden',
  templateUrl: './briq-hidden.component.html',
  styleUrls: ['./briq-hidden.component.scss']
})
export class BriqHiddenComponent implements OnInit {
  @Input() formElement: BriqHiddenBuilder;

  ngOnInit() {
    console.log('hidden component');
  }
}
