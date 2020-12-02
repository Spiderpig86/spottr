import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { AuthConstants } from './auth.constants';
import { AuthConfig } from './auth.config';
import { Store } from 'src/store';


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

  constructor(private httpClient: HttpClient, private store: Store) {}

  public login(): void {
    const loginUrl = AuthConstants.API_ACCOUNT_URL + AuthConstants.API_AUTH;

    // External redirect
    window.location.href = this.buildUrlParam(loginUrl + '?', {
      client_id: AuthConfig.clientId,
      response_type: 'token',
      redirect_uri: 'http://localhost:4200/login', // TODO: Hard code for now
      scope: encodeURIComponent(this.scopes.join(' ')),
    });
  }

  get authToken() {
    return this.store.value.token;
  }

  setToken(token: string) {
    this.store.set(AuthConstants.AUTH_KEY, token);
  }

  
  getProfile(token: string): Promise<any> {
    // TODO: Check logged in or not
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient
      .get(`${AuthConstants.API_URL}${AuthConstants.API_PROFILE}`, {
        headers,
      })
      .toPromise();
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
