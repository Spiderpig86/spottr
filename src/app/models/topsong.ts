/**
 * Interface representing list of top songs for user
 *
 * @export
 * @interface TopSongs
 */
export interface TopSongs {
    items: Song[];
}

export interface Song {
    external_urls: {
        [key: string]: string;
    };
}