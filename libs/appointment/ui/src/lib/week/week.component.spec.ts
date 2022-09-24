import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekComponent } from './week.component';

describe('WeekComponent', () => {
  let fixture: ComponentFixture<WeekComponent>;
  let component: WeekComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WeekComponent],
    });

    fixture = TestBed.createComponent(WeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
