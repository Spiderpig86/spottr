import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { SpottrAppConstants } from './spottr-service.config';
import { SpottrCredentials } from './spottr-credentials';
import { LoggingService, LOG_LEVEL } from '../logging-service/logging.service';

/**
 * App authentication with Spotify
 */
@Injectable({
  providedIn: 'root'
})
export class SpottrAuthService {

  private scopes = [
    'user-read-email',
    'user-read-currently-playing',
    'user-modify-playback-state',
    'streaming',
    'user-read-playback-state',
    'user-read-private',
    'user-top-read',
    'user-read-email'
  ];

  constructor(private http: Http, private loggingService: LoggingService) {

  }

  /**
   * Allow the user to authorize itself when logging into Spotify
   *
   * @returns {Promise<string>}
   * @memberof SpottrAuthService
   */
  public authorizeSpotify(): void {
    const authUrl = SpottrAppConstants.API_ACCOUNT_URL + SpottrAppConstants.API_AUTH;
    window.location.href = this.buildUrlParam(authUrl + '?', {
      client_id: SpottrCredentials.client_id,
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/accept',
      scope: encodeURIComponent(this.scopes.join(' '))
    });
  }

  public getToken(): string {
    return localStorage.getItem(SpottrAppConstants.LOCAL_TOKEN);
  }

  public setToken(token: string): void {
    localStorage.setItem(SpottrAppConstants.LOCAL_TOKEN, token);
  }

  /* HELPER FUNCTIONS */
  /**
   *Helper function for building a url given a single level parameter object
   *
   * @private
   * @param {string} url - the url to build off of
   * @param {*} params - object of parameters
   * @returns {string} - returns the paramaterized url
   * @memberof SpottrAuthService
   */
  private buildUrlParam(url: string, params: any): string {
    Object.entries(params).forEach(
      ([key, value]) => url += `&${ key }=${ value }`
    );
    return url;
  }

  /**
   * Helper function for handling failure in Promise responses
   *
   * @private
   * @param {*} error - the error payload
   * @returns {Promise<any>} - return a resolution of the promise
   * @memberof SpottrAuthService
   */
  private handleError(error: any): Promise<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    this.loggingService.log(errMsg, LOG_LEVEL.Severe); // log to console
    return Promise.resolve(false);
  }
}
