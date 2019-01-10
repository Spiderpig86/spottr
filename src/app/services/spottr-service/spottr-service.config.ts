/**
 *Constants for the Spottr Service files
 *
 * @export
 * @class SpottrAppConstants
 */
export const SpottrAppConstants: ISpottrAppConstants = {
  API_URL: 'https://api.spotify.com/v1',
  API_ACCOUNT_URL: 'https://accounts.spotify.com',
  API_AUTH: '/authorize',
  API_PROFILE: '/me',
  API_TOP_TRACKS: '/top/tracks',
  API_TOP_ARTISTS: '/top/artists',

  AUTH_KEY: 'access_token',
  AUTH_TYPE: 'token_type,',

  LOCAL_TOKEN: 'spottr_auth_token',

  TOP_SHORT: 'short_term',
  TOP_MEDIUM: 'medium_term',
  TOP_LONG: 'long_term',
};

export interface ISpottrAppConstants {
  API_URL: string;
  API_ACCOUNT_URL: string;
  API_AUTH: string;
  API_PROFILE: string;
  API_TOP_TRACKS: string;
  API_TOP_ARTISTS: string;

  AUTH_KEY: string;
  AUTH_TYPE: string;

  LOCAL_TOKEN: string;

  TOP_SHORT: string;
  TOP_MEDIUM: string;
  TOP_LONG: string;
}
