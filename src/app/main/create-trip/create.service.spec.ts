import { TestBed } from '@angular/core/testing';

import { CreateService } from './create.service';

describe('CreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateService = TestBed.get(CreateService);
    expect(service).toBeTruthy();
  });
});
