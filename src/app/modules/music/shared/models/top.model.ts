export type StringObject = { [id: string]: string };

export interface ArtistImage {
    height: string;
    url: string;
    width: string;
}

export interface TopArtist {
    external_urls: StringObject;
    followers: {
        href: string | null;
        total: string;
    },
    genres: string[],
    href: string;
    id: string;
    images: ArtistImage[],
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface TopArtistResponse {
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

export interface TopTrack {
    album: any;
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