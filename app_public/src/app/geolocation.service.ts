import { Injectable } from '@angular/core';

@Injectable()
export class GeolocationService {

  constructor() { }

  public getPosition(cbSuccess, cbError, cbNoGeo): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
    } else {
      cbNoGeo();
    }
  }

}
