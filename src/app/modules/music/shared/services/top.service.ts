import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TopArtistsResponse, TopTracksResponse } from '../models/top.model';
import { ENDPOINTS } from '../store/endpoint.store';
import { DEFAULT_CACHE_MINUTES } from '../music.constants';

import { CachedHttpService } from './cached-http-client.service';

export enum TopType {
  ARTISTS = 'artists',
  TRACKS = 'tracks',
}

export enum TopTimeRange {
  SHORT_TERM = 'short_term',
  MEDIUM_TERM = 'medium_term',
  LONG_TERM = 'long_term',
}

@Injectable()
export class TopService {
  constructor(private http: CachedHttpService) {}

  getTopArtists(
    timeRange: TopTimeRange,
    limit?: number,
    offset?: number
  ): Observable<TopArtistsResponse> {
    return this.getTop(TopType.ARTISTS, timeRange, limit, offset);
  }

  getTopTracks(
    timeRange: TopTimeRange,
    limit?: number,
    offset?: number
  ): Observable<TopTracksResponse> {
    return this.getTop(TopType.TRACKS, timeRange, limit, offset);
  }

  private getTop<T>(
    type: TopType,
    timeRange: TopTimeRange,
    limit?: number, // Max 50
    offset?: number
  ): Observable<T> {
    const endpoint = new URL(ENDPOINTS.get('top') + type);
    endpoint.searchParams.append('time_range', timeRange);
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
}
