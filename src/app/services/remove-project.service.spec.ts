import { TestBed } from '@angular/core/testing';

import { RemoveProjectService } from './remove-project.service';

describe('RemoveProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveProjectService = TestBed.get(RemoveProjectService);
    expect(service).toBeTruthy();
  });
});
