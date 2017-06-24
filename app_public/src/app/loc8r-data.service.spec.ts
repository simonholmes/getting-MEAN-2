import { TestBed, inject } from '@angular/core/testing';

import { Loc8rDataService } from './loc8r-data.service';

describe('Loc8rDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Loc8rDataService]
    });
  });

  it('should be created', inject([Loc8rDataService], (service: Loc8rDataService) => {
    expect(service).toBeTruthy();
  }));
});
