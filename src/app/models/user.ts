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
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}

/**
 * Interface for follower data
 *
 * @export
 * @interface Followers
 */
export interface Followers {
    href?: string;
    total: number;
}

/**
 * Interface for image data
 *
 * @export
 * @interface Image
 */
export interface Image {
    height?: number;
    url: string;
    width?: number;
}