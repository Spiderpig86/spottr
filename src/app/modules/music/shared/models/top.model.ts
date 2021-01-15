import { Artist, Image, StringObject, Track } from './shared.model';

export interface TopArtistsResponse {
    items: Artist[];
}

export interface TopTracksResponse {
    items: Track[];
}