import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Location } from './home-list/home-list.component';

@Injectable()
export class Loc8rDataService {

  constructor(private http: Http) { 

  }

  private apiBaseUrl = 'http://localhost:3000/api/';

  public getLocations(): Promise<Location[]> {
    const lng: number = -0.7992599;
    const lat: number = 51.378091;
    const maxDistance: number = 20;
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Location[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
