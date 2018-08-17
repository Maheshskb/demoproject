import { TestBed, inject } from '@angular/core/testing';

import { BearingService } from './bearing.service';

describe('BearingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BearingService]
    });
  });

  it('should be created', inject([BearingService], (service: BearingService) => {
    expect(service).toBeTruthy();
  }));
});
