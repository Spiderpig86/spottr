import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { SpottrAppConstants } from './spottr-service.config';
import { User } from '../../models/user';

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
   * Retrieve user profile given the user auth token
   * TODO: Generate model
   *
   * @param {string} token - authorization token
   * @returns {Observable<any>} - JSON response with top songs
   * @memberof SpottrService
   */
  getProfile(token: string): Observable<User> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<User>(`${SpottrAppConstants.API_URL}${SpottrAppConstants.API_PROFILE}`, { headers: headers })
      .pipe(
        map(result => {

          console.log(result);
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }

  /**
   * Get the top tracks for the user given a time range and other parameters
   *
   * @param {string} token - auth token for user
   * @param {string} time_range - different time ranges to search for from today
   * @param {number} limit - number of results to show
   * @param {number} offset - offset of results to start showing from
   * @returns {Observable<any>} - JSON response with full data
   * @memberof SpottrService
   */
  getTopTracks(token: string, timeRange?: string, limit?: string, offset?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const params = new HttpParams(); // Build params
    if (timeRange)
      params.set('time_ramge', timeRange)
    if (limit)
      params.set('limit', limit);
    if (offset)
      params.set('offset', offset);


    return this.http.get<any>(`${SpottrAppConstants.API_URL}${SpottrAppConstants.API_PROFILE}${SpottrAppConstants.API_TOP_TRACKS}`, { params,  headers: headers })
      .pipe(
        map(result => {

          console.log(result);
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }

  /**
   * Function to get the top artists for a given user
   *
   * @param {string} token - auth token for user
   * @param {string} time_range - different time ranges to search for from today
   * @param {number} limit - number of results to show
   * @param {number} offset - offset of results to start showing from
   * @returns {Observable<any>} - JSON response with full data
   * @memberof SpottrService
   */
  getTopArtists(token: string, timeRange?: string, limit?: string, offset?: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    const params = new HttpParams(); // Build params
    if (timeRange)
      params.set('time_ramge', timeRange)
    if (limit)
      params.set('limit', limit);
    if (offset)
      params.set('offset', offset);


    return this.http.get<any>(`${SpottrAppConstants.API_URL}${SpottrAppConstants.API_PROFILE}${SpottrAppConstants.API_TOP_ARTISTS}`, { params,  headers: headers })
      .pipe(
        map(result => {

          console.log(result);
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }
}
