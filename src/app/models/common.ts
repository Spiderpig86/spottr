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

/**
 * Interface for song genres
 * TODO: Needs more info
 * 
 * @export
 * @interface Genre
 */
export interface Genre {
    name: string;
    count: number;
}