import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PointerComponent } from './pointer.component';

describe('PointerComponent', () => {
  let fixture: ComponentFixture<PointerComponent>;
  let component: PointerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PointerComponent],
    });

    fixture = TestBed.createComponent(PointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
