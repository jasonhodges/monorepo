import { TestBed } from '@angular/core/testing';

import { LibHeaderService } from './lib-header.service';

describe('LibHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibHeaderService = TestBed.get(LibHeaderService);
    expect(service).toBeTruthy();
  });
});
