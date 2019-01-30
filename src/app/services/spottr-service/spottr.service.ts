import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { SpottrAppConstants } from './spottr-service.config';
import { User } from '../../models/user';
import { TopTracks, Track } from '../../models/topsongs';
import { TopArtists } from '../../models/topartist';

/**
 * An Angular 6 service that interfaces with the Spotify API to fetch data.
 */
@Injectable({
  providedIn: 'root'
})
export class SpottrService {

  public profile: User = null;

  public shorTermTracks: TopTracks = null;
  public mediumTermTracks: TopTracks = null;
  public longTermTracks: TopTracks = null;
  
  public shorTermArtists: TopArtists = null;
  public mediumTermArtists: TopArtists = null;
  public longTermArtists: TopArtists = null;

  constructor(private http: HttpClient) {
  }

  /**
   * Retrieve user profile iven the user auth token
   * TODO: Generate model
   *
   * @param {string} token - authorization token
   * @returns {Observable<any>} - JSON response with top songs
   * @memberof SpottrService
   */
  getProfile(token: string): Observable<User> {

    if (this.profile) {
      return of(this.profile);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get<User>(`${SpottrAppConstants.API_URL}${SpottrAppConstants.API_PROFILE}`, { headers: headers })
      .pipe(
        map(result => {
          this.profile = result;
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }

  /**
   * Return the list of tracks the user listened to the most the last week
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getShortTermTracks(token: string, limit?: string, offset?: string): Observable<TopTracks> {
    if (this.shorTermTracks && this.shorTermTracks.items.length === Number(limit)) {
      return of(this.shorTermTracks);
    }

    return this.getTopTracks(token, SpottrAppConstants.TOP_SHORT, limit, offset).pipe(
      map(res => {
        this.shorTermTracks = res;
        return res;
      })
    );
  }

  /**
   * Return the list of tracks the user listened to the most the last 6 months
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getMediumTermTracks(token: string, limit?: string, offset?: string): Observable<TopTracks> {
    if (this.mediumTermTracks) {
      return of(this.mediumTermTracks);
    }

    return this.getTopTracks(token, SpottrAppConstants.TOP_MEDIUM, limit, offset).pipe(
      map(res => {
        this.mediumTermTracks = res;
        return res;
      })
    );
  }
  
  /**
   * Return the list of tracks the user listened to the most all time
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getLongTermTracks(token: string, limit?: string, offset?: string): Observable<TopTracks> {
    if (this.longTermTracks) {
      return of(this.longTermTracks);
    }

    return this.getTopTracks(token, SpottrAppConstants.TOP_LONG, limit, offset).pipe(
      map(res => {
        this.longTermTracks = res;
        return res;
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
  private getTopTracks(token: string, timeRange?: string, limit?: string, offset?: string): Observable<TopTracks> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    let params = new HttpParams(); // Build params
    if (timeRange)
      params = params.set('time_range', timeRange)
    if (limit)
      params = params.set('limit', limit);
    if (offset)
      params = params.set('offset', offset);
      
    return this.http.get<TopTracks>(`${SpottrAppConstants.API_URL}${SpottrAppConstants.API_PROFILE}${SpottrAppConstants.API_TOP_TRACKS}`, { params, headers: headers })
      .pipe(
        map(result => {
          result.time_period = timeRange;
          console.log(result);
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }

  /**
   * Return the top artists listened to last week
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getShortTermArtists(token: string, limit?: string, offset?: string): Observable<TopArtists> {
    if (this.shorTermArtists && this.shorTermArtists.items.length === Number(limit)) {
      return of(this.shorTermArtists);
    }

    return this.getTopArtists(token, SpottrAppConstants.TOP_SHORT, limit, offset).pipe(
      map(res => {
        this.shorTermArtists = res;
        return res;
      })
    );
  }

  /**
   * Return the top artists listened to the last 6 months
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getMediumTermArtists(token: string, limit?: string, offset?: string): Observable<TopArtists> {
    if (this.mediumTermArtists) {
      return of(this.mediumTermArtists);
    }

    return this.getTopArtists(token, SpottrAppConstants.TOP_MEDIUM, limit, offset).pipe(
      map(res => {
        this.mediumTermArtists  = res;
        return res;
      })
    );
  }

  /**
   * Return the top artists listened to all time
   * @param token - user auth token
   * @param limit - number of results to load
   * @param offset - offset of the results
   */
  public getLongTermArtists(token: string, limit?: string, offset?: string): Observable<TopArtists> {
    if (this.longTermArtists) {
      return of(this.longTermArtists);
    }

    return this.getTopArtists(token, SpottrAppConstants.TOP_LONG, limit, offset).pipe(
      map(res => {
        this.longTermArtists = res;
        return res;
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
  private getTopArtists(token: string, timeRange?: string, limit?: string, offset?: string): Observable<TopArtists> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    let params = new HttpParams(); // Build params
    if (timeRange)
      params = params.set('time_range', timeRange)
    if (limit)
      params = params.set('limit', limit);
    if (offset)
      params = params.set('offset', offset);


    return this.http.get<TopArtists>(`${SpottrAppConstants.API_URL}${SpottrAppConstants.API_PROFILE}${SpottrAppConstants.API_TOP_ARTISTS}`, { params,  headers: headers })
      .pipe(
        map(result => {
          return result;
        }),
        catchError(err => {
          return of(null);
        })
      );
  }

  /**
   * Generates the top genres of a given time range
   * 
   * @param {string} token - the token for the api
   * @param {string} timeRange - the time range to look for top genres
   * @returns {Observable<string[]>} - a list of top genres
   * @memberof SpottrService
   */
  public getTopGenres(token: string, timeRange: string): Observable<string[]> {
    // Check if the artists we want to analyze have been analyzed
    let map: Map<string, number> = new Map();
    this.getTopArtists(token, timeRange).subscribe(artists => {
      // Once we have the artists, use a map to store the genres
      for (const artist of artists.items) {
        // Go through all genres
        for (const genre of artist.genres) {
          if (!map.has(genre)) {
            map.set(genre, 1);
          } else {
            map.set(genre, map.get(genre) + 1);
          }
        }
      }

      map = new Map([...map].sort((a, b) => b[1] - a[1]));

      console.log(map);
    });

    return null;
  }
}
