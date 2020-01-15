import { TestBed } from '@angular/core/testing';

import { GetProjectService } from './get-project.service';

describe('GetProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProjectService = TestBed.get(GetProjectService);
    expect(service).toBeTruthy();
  });
});
