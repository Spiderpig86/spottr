import { Followers, Image, StringObject, Track } from './shared.model';

export interface PlaylistsResponse {
    href: string;
    items: Playlist[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}

export interface TrackCounts {
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
    tracks: TrackCounts;
    type: string;
    uri: string;
}

/*
    PLAYLIST DETAILS API
*/

export interface PlaylistDetailsResponse {
    collaborative: boolean;
    description: string;
    external_urls: StringObject;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        items: PlaylistTrack[];
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
    }
}

export interface PagingObject {
    href: string;
    items: PlaylistTrack;
    limit: number; // Typically 100
    next: string | null; // Stores URL if available
    offset: number;
    previous: string | null; // Stores URL if available
    total: number;
}

export interface PlaylistTrack {
    added_at: string;
    added_by: AddedBy;
    is_local: boolean;
    track: Track;
    video_thumbnail: StringObject;
}

export interface AddedBy {
    external_url: StringObject;
    href: string;
    id: string;
    type: string;
    uri: string;
}