import { Image, StringObject, Track } from './shared.model';

export interface TopArtist {
    external_urls: StringObject;
    followers: {
        href: string | null;
        total: string;
    },
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface TopArtistsResponse {
    items: TopArtist[];
}

export interface TopTracksResponse {
    items: Track[];
}