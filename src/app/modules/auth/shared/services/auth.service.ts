import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthConstants } from './auth.constants';
import { AuthConfig } from './auth.config';

@Injectable()
export class AuthService {
  // TODO: Constants file?
  private scopes = [
    'user-read-email',
    'user-read-currently-playing',
    'user-modify-playback-state',
    'streaming',
    'user-read-playback-state',
    'user-read-private',
    'user-top-read',
    'user-read-email',
  ];
  constructor(private httpClient: HttpClient) {}

  public login(): void {
    const loginUrl = AuthConstants.API_ACCOUNT_URL + AuthConstants.API_AUTH;

    // External redirect
    window.location.href = this.buildUrlParam(loginUrl + '?', {
      client_id: AuthConfig.clientId,
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/accept', // TODO: Hard code for now
      scope: encodeURIComponent(this.scopes.join(' ')),
    });
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
      ([key, value]) => (url += `&${key}=${value}`)
    );
    return url;
  }
}
