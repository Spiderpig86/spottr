import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AddSongsToPlaylistRequestBody,
  AddSongsToPlaylistResponse,
  CreatePlaylistRequestBody,
  PlaylistDetailsResponse,
  PlaylistsResponse,
  PlaylistTracksResponse,
} from '../models/playlist.model';
import { DEFAULT_CACHE_MINUTES } from '../music.constants';
import { ENDPOINTS } from '../store/endpoint.store';
import { CachedHttpService } from './cached-http-client.service';

@Injectable()
export class PlaylistsService {
  constructor(private http: CachedHttpService) {}

  getPlaylists(limit?: number, offset?: number): Observable<PlaylistsResponse> {
    const endpoint = new URL(ENDPOINTS.get('playlists'));
    if (limit) {
      endpoint.searchParams.append('limit', limit.toString());
    }
    if (offset) {
      endpoint.searchParams.append('offset', offset.toString());
    }
    return this.http.get({
      url: endpoint.toString(),
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }

  getPlaylistDetails(playlistId: string): Observable<PlaylistDetailsResponse> {
    const endpoint = new URL(ENDPOINTS.get('playlist_details') + playlistId);
    return this.http.get({
      url: endpoint.toString(),
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }

  getPlaylistTracks(
    playlistId: string,
    limit?: number,
    offset?: number
  ): Observable<PlaylistTracksResponse> {
    const endpoint = new URL(
      ENDPOINTS.get('playlist_details') + playlistId + `/tracks`
    );
    if (limit) {
      endpoint.searchParams.append('limit', limit.toString());
    }
    if (offset) {
      endpoint.searchParams.append('offset', offset.toString());
    }
    return this.http.get({
      url: endpoint.toString(),
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }

  putCreatePlaylist(
    userId: string,
    name: string,
    description?: string
  ): Observable<PlaylistDetailsResponse> {
    const endpoint = new URL(
      ENDPOINTS.get('create_playlist').replace('{user_id}', userId)
    );
    const payload: CreatePlaylistRequestBody = {
      name,
      public: false,
      collaborative: false,
      description,
    };

    return this.http.post({
      url: endpoint.toString(),
      body: payload,
    });
  }

  putSongsToPlaylist(
    playlistId: string,
    position?: number,
    uris?: string[]
  ): Observable<AddSongsToPlaylistResponse> {
    const endpoint = new URL(
      ENDPOINTS.get('add_songs_to_playlist').replace(
        '{playlist_id}',
        playlistId
      )
    );
    const payload: AddSongsToPlaylistRequestBody = {
      uris,
      position,
    };

    return this.http.post({
      url: endpoint.toString(),
      body: payload,
    });
  }
}
