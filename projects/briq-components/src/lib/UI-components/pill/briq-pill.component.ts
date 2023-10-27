import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'briq-pill',
  templateUrl: './briq-pill.component.html',
  styleUrls: ['./briq-pill.component.scss']
})
export class BriqPillComponent implements OnInit {
  @Input() type: 'default' | 'primary' = 'default';

  constructor() {}

  ngOnInit(): void {}
}
