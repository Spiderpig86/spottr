import { Image, StringObject } from './shared.model';

export interface PlaylistsResponse {
    href: string;
    items: Playlist[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}

export interface Tracks {
    href: string;
    total: number;
}

export interface Owner {
    display_name: string;
    external_urls: StringObject;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: StringObject;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}