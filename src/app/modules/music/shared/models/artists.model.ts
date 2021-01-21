import { Artist, Track } from './shared.model';

export interface RelatedArtistResponse {
    artists: Artist[];
}

export interface TopTracksByArtistResponse {
    tracks: Track[];
}