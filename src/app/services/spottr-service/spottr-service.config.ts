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


  AUTH_KEY: 'access_token',
  AUTH_TYPE: 'token_type,',

  LOCAL_TOKEN: 'spottr_auth_token',
};

export interface ISpottrAppConstants {
  API_URL: string;
  API_ACCOUNT_URL: string;
  API_AUTH: string;
  API_PROFILE: string;


  AUTH_KEY: string;
  AUTH_TYPE: string;

  LOCAL_TOKEN: string;
}
