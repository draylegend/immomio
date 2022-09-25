import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekContentComponent } from './week-content.component';

describe('WeekContentComponent', () => {
  let fixture: ComponentFixture<WeekContentComponent>;
  let component: WeekContentComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WeekContentComponent],
    });

    fixture = TestBed.createComponent(WeekContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
