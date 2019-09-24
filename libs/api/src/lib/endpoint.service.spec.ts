import { TestBed } from '@angular/core/testing';

import { EndpointService } from './endpoint.service';

describe('EndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndpointService = TestBed.get(EndpointService);
    expect(service).toBeTruthy();
  });
});
