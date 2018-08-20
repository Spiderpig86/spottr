/**
 *Constants for the Spottr Service files
 *
 * @export
 * @class SpottrAppConstants
 */
export const SpottrAppConstants: ISpottrAppConstants = {
  API_URL: 'https://api.spotify.com',
  API_ACCOUNT_URL: 'https://accounts.spotify.com',
  API_AUTH: '/authorize'
};

export interface ISpottrAppConstants {
  API_URL: string;
  API_ACCOUNT_URL: string;
  API_AUTH: string;
}
