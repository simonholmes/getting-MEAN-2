import { TestBed, inject } from '@angular/core/testing';

import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocationService]
    });
  });

  it('should be created', inject([GeolocationService], (service: GeolocationService) => {
    expect(service).toBeTruthy();
  }));
});
