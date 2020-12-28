import { Image, StringObject } from './shared.model';

export interface TopArtist {
    external_urls: StringObject;
    followers: {
        href: string | null;
        total: string;
    },
    genres: string[],
    href: string;
    id: string;
    images: Image[],
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface TopArtistsResponse {
    items: TopArtist[];
}

export interface Artist {
    external_urls: StringObject;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Album {
    images: Image[];
    [x: string]: any;
}

export interface TopTrack {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: StringObject;
    external_urls: StringObject;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface TopTracksResponse {
    items: TopTrack[];
}