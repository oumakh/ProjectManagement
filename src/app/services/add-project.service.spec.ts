import { TestBed } from '@angular/core/testing';

import { AddProjectService } from './add-project.service';

describe('AddProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProjectService = TestBed.get(AddProjectService);
    expect(service).toBeTruthy();
  });
});
