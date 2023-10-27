import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BriqSearchbarComponent } from './briq-searchbar.component';
import { By } from '@angular/platform-browser';

describe('SearchbarComponent', () => {
  let component: BriqSearchbarComponent;
  let fixture: ComponentFixture<BriqSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BriqSearchbarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriqSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the BriqSearchbarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should change the primary class', () => {
    component.type = 'white';

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.white'))).toBeTruthy();
  });

  it('should have a placeholder text', () => {
    expect(component.placeholder).toBe('Zoek een item');
  });
});
