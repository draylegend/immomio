import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewingsComponent } from './viewings.component';

describe('ViewingsComponent', () => {
  let fixture: ComponentFixture<ViewingsComponent>;
  let component: ViewingsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ViewingsComponent],
    });

    fixture = TestBed.createComponent(ViewingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
