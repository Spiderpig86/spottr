import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { AuthConstants } from './auth.constants';
import { AuthConfig } from './auth.config';
import { Store } from 'src/store';

@Injectable()
export class AuthService {
  private RANDOM_STRING_LENGTH = 64;
  private SPOTIFY_AUTHORIZE_URL = `https://accounts.spotify.com/authorize`;
  private SPOTIFY_TOKEN_URL = `https://accounts.spotify.com/api/token`;
  private REDIRECT_URL = 
    `${window.location.protocol}//${window.location.host}/login`;

  private scopes = [
    'user-read-email',
    'user-read-currently-playing',
    'user-modify-playback-state',
    'streaming',
    'user-read-playback-state',
    'user-read-private',
    'user-top-read',
    'user-read-email',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-follow-read',
  ];

  auth$: Observable<string>;

  constructor(private store: Store) {
    this.auth$ = this.store.select(AuthConstants.AUTH_KEY);
  }

  public login(): void {
    const loginUrl = AuthConstants.API_ACCOUNT_URL + AuthConstants.API_AUTH;

    // External redirect
    window.location.href = this.buildUrlParam(loginUrl + '?', {
      client_id: AuthConfig.clientId,
      response_type: 'token',
      redirect_uri: encodeURIComponent(this.REDIRECT_URL),
      scope: encodeURIComponent(this.scopes.join(' ')),
    });
  }

  /**
   * New PKCE auth flow required by Spotify.
   * 1. Generate code_verifier.
   * 2. Send SHA256 + Base64 encode as challenge to Spotify auth server.
   */
  public async loginPKCE(): Promise<void> {
    // Code challenge generation
    const codeVerifier = this.generateRandomString(this.RANDOM_STRING_LENGTH);
    this.setCodeVerifier(codeVerifier);
    const hashed = await this.sha256(codeVerifier);
    const codeChallenge = this.base64Encode(hashed);

    // Request authorization code and navigate to Spotify auth page
    const authUrl = new URL(this.SPOTIFY_AUTHORIZE_URL);
    
    authUrl.search = new URLSearchParams({
      response_type: 'code',
      client_id: AuthConfig.clientId,
      scope: this.scopes.join(' '),
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: this.REDIRECT_URL,
    }).toString();
    window.location.href = authUrl.toString();
  }

  // Fetches token after loginPKCE() completes
  public async fetchAuthToken(): Promise<string> {
    const codeVerifier = this.codeVerifier;
    const body = await fetch(this.SPOTIFY_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: AuthConfig.clientId,
        grant_type: 'authorization_code',
        code: this.getPKCEAuthorizationCode,
        // No real redirection, only used as verification to match initial URL from loginPKCE() call
        redirect_uri: this.REDIRECT_URL,
        code_verifier: codeVerifier,
      }).toString(),
    });
    const response = await body.json();
    // TODO should also read the refresh token, but not enough time to invest as of now
    return response.access_token;
  }

  public logout(): void {
    this.store.set(AuthConstants.AUTH_KEY, undefined);
  }

  get authToken() {
    return this.store.value.access_token;
  }

  setToken(token: string) {
    this.store.set(AuthConstants.AUTH_KEY, token);
  }

  get codeVerifier() {
    return this.store.value.code_verifier;
  }

  setCodeVerifier(codeVerifier: string) {
    this.store.set(AuthConstants.CODE_VERIFIER, codeVerifier);
  }

  get getPKCEAuthorizationCode() {
    return this.store.value.pkce_auth_code;
  }

  setPKCEAuthorizationCode(authCode: string) {
    this.store.set(AuthConstants.PKCE_AUTH_CODE, authCode);
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

  private generateRandomString(length: number): string {
    const possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], '');
  }

  private async sha256(plain: string): Promise<ArrayBuffer> {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
  }

  private base64Encode(input: ArrayBufferLike): string {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }
}
