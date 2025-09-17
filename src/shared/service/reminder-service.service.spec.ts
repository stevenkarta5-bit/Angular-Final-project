import { TestBed } from '@angular/core/testing';

import { ReminderServiceService } from './reminder-service.service';

describe('ReminderServiceService', () => {
  let service: ReminderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
