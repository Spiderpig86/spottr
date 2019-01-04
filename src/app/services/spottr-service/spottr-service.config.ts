/**
 *Constants for the Spottr Service files
 *
 * @export
 * @class SpottrAppConstants
 */
export const SpottrAppConstants: ISpottrAppConstants = {
  API_URL: 'https://api.spotify.com',
  API_ACCOUNT_URL: 'https://accounts.spotify.com',
  API_AUTH: '/authorize',

  AUTH_KEY: 'access_token',
  AUTH_TYPE: 'token_type,'
};

export interface ISpottrAppConstants {
  API_URL: string;
  API_ACCOUNT_URL: string;
  API_AUTH: string;

  AUTH_KEY: string;
  AUTH_TYPE: string;
}
