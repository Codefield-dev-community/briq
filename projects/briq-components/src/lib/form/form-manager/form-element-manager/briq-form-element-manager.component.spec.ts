import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriqFormElementManagerComponent } from './briq-form-element-manager.component';

describe('FormElementManagerComponent', () => {
  let component: BriqFormElementManagerComponent;
  let fixture: ComponentFixture<BriqFormElementManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BriqFormElementManagerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriqFormElementManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create BriqFormElementManagerComponent', () => {
    expect(component).toBeTruthy();
  });
});
