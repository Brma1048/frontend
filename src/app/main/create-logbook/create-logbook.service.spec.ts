import { TestBed } from '@angular/core/testing';

import { CreateLogbookService } from './create-logbook.service';

describe('CreateLogbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateLogbookService = TestBed.get(CreateLogbookService);
    expect(service).toBeTruthy();
  });
});
