import { TestBed } from '@angular/core/testing';

import { LogbockService } from './logbock.service';

describe('LogbockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogbockService = TestBed.get(LogbockService);
    expect(service).toBeTruthy();
  });
});
