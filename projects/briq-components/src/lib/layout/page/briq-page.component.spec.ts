import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriqPageComponent } from './briq-page.component';

describe('BriqPageComponent', () => {
  let component: BriqPageComponent;
  let fixture: ComponentFixture<BriqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BriqPageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create BriqPageComponent', () => {
    expect(component).toBeTruthy();
  });
});
