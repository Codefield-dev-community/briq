import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriqFormManagerComponent } from './briq-form-manager.component';

describe('BriqFormManagerComponent', () => {
  let component: BriqFormManagerComponent;
  let fixture: ComponentFixture<BriqFormManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BriqFormManagerComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriqFormManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create BriqFormManagerComponent', () => {
    expect(component).toBeTruthy();
  });
});
