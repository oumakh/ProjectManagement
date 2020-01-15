import { TestBed } from '@angular/core/testing';

import { GetProjectListService } from './get-project-list.service';

describe('GetProjectListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProjectListService = TestBed.get(GetProjectListService);
    expect(service).toBeTruthy();
  });
});
