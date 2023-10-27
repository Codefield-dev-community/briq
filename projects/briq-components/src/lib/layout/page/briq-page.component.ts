import { Component, OnInit } from '@angular/core';

// @TODO more suitable as direcive?
@Component({
  selector: 'briq-page',
  template: '<ng-content></ng-content>',
  styleUrls: ['./briq-page.component.scss']
})
export class BriqPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
