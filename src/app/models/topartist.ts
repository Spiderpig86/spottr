import { Followers, Image } from "./common";

/**
 * Interface representing list of top songs for user
 *
 * @export
 * @interface TopArtists
 */
export interface TopArtists {
    items: Artist[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    previous?: string;
    next?: string;
}

export interface Artist {
    external_urls: {
        [key: string]: string;
    };
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}