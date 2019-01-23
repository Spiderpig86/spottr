import { Image } from "./common";

export interface TopTracks {
    items: Track[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    previous?: string;
    next?: string;
    time_period: string;
}

export interface Track {
    album: Album;
    artists: SongArtist[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: {
        [key: string]: string;
    };
    href: string;
    id: string;
    images: Image[];
    is_local:  boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface Album {
    album_type: string;
    artists: SongArtist[];
    external_urls: {
        [key: string]: string;
    };
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    type: string;
    uri: string;
}

export interface SongArtist {
    external_urls: {
        [key: string]: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    url: string;
}