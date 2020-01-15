import { TestBed } from '@angular/core/testing';

import { EditProjectService } from './edit-project.service';

describe('EditProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditProjectService = TestBed.get(EditProjectService);
    expect(service).toBeTruthy();
  });
});
