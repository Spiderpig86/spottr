import { Image, Followers } from "./common";

/**
 * Interface representing the user data for Spotify users
 *
 * @export
 * @interface User
 */
export interface User {
    country: string;
    display_name: string;
    email: string;
    external_urls: {
        [key: string]: string;
    };
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}