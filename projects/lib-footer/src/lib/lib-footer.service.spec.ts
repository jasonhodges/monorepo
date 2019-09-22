import { TestBed } from '@angular/core/testing';

import { LibFooterService } from './lib-footer.service';

describe('LibFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibFooterService = TestBed.get(LibFooterService);
    expect(service).toBeTruthy();
  });
});
