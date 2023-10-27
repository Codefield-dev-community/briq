import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriqPillComponent } from './briq-pill.component';
import { By } from '@angular/platform-browser';

describe('PillComponent', () => {
  let component: BriqPillComponent;
  let fixture: ComponentFixture<BriqPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BriqPillComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BriqPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PillComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should change the primary class', () => {
    component.type = 'primary';

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.primary'))).toBeTruthy();
  });
});
