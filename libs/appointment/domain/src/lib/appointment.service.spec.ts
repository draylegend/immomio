import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { AppointmentsLoadService } from './appointments-load.service';

describe('AppointmentsLoadService', () => {
  let service: AppointmentsLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Apollo, AppointmentsLoadService],
    });

    service = TestBed.inject(AppointmentsLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
