import { TestBed } from '@angular/core/testing';

import { LibPlayerCardService } from './lib-player-card.service';

describe('LibPlayerCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibPlayerCardService = TestBed.get(LibPlayerCardService);
    expect(service).toBeTruthy();
  });
});
