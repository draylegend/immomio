import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NextViewingComponent } from './next-viewing.component';

describe('NextViewingComponent', () => {
  let fixture: ComponentFixture<NextViewingComponent>;
  let component: NextViewingComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NextViewingComponent],
    });

    fixture = TestBed.createComponent(NextViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
