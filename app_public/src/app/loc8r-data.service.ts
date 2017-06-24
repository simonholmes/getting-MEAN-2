import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Location } from './home-list/home-list.component';

@Injectable()
export class Loc8rDataService {

  private apiBaseUrl = 'http://localhost:3000/api/'

  constructor(private http: Http) { 

  }

  getLocations(): Promise<Location[]> {
    return this.http
      .get(`${this.apiBaseUrl}/locations?lng=-0.7992599&lat=51.378091&maxDistance=20`)
      .toPromise()
      .then(response => response.json() as Location[])
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
