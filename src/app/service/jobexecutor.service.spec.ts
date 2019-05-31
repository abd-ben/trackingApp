import { TestBed } from '@angular/core/testing';

import { JobexecutorService } from './jobexecutor.service';

describe('JobexecutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobexecutorService = TestBed.get(JobexecutorService);
    expect(service).toBeTruthy();
  });
});
