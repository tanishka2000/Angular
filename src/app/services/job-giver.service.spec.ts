import { TestBed } from '@angular/core/testing';

import { JobGiverService } from './job-giver.service';

describe('JobGiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobGiverService = TestBed.get(JobGiverService);
    expect(service).toBeTruthy();
  });
});
