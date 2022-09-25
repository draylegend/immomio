import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeComponent } from './time.component';

describe('TimeComponent', () => {
  let fixture: ComponentFixture<TimeComponent>;
  let component: TimeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimeComponent],
    });

    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
