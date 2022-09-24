import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let fixture: ComponentFixture<FilterComponent>;
  let component: FilterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterComponent],
      providers: [provideNoopAnimations()],
    });

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
