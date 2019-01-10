import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SpottrAppConstants } from './spottr-service.config';

/**
 * An Angular 6 service that interfaces with the Spotify API to fetch data.
 */
@Injectable({
  providedIn: 'root'
})
export class SpottrService {

  constructor(private http: HttpClient) {

  }

  /**
   *
   * TODO: Generate model
   *
   * @param {string} token
   * @returns {Observable<any>}
   * @memberof SpottrService
   */
  getProfile(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<any>(`${SpottrAppConstants.API_URL}${SpottrAppConstants.API_PROFILE}`, { headers: headers })
      .pipe(
        map(result => {

          console.log(result);
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      )
  }
}
