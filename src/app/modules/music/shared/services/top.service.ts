import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TopArtistResponse,
  TopTracksResponse,
} from '../models/top.model';
import { DEFAULT_CACHE_MINUTES } from '../music.constants';

import { CachedHttpService } from './cached-http-client.service';

export enum TopType {
  ARTISTS = 'artists',
  TRACKS = 'tracks',
}

export enum TimeRange {
  SHORT_TERM = 'short_term',
  MEDIUM_TERM = 'medium_term',
  LONG_TERM = 'long_term',
}

@Injectable()
export class TopService {
  constructor(private http: CachedHttpService) {}

  getTopArtists(
    timeRange: TimeRange,
    limit?: number,
    offset?: number
  ): Observable<TopArtistResponse> {
    return this.getTop(TopType.ARTISTS, timeRange, limit, offset);
  }

  getTopSongs(
    timeRange: TimeRange,
    limit?: number,
    offset?: number
  ): Observable<TopTracksResponse> {
    return this.getTop(TopType.TRACKS, timeRange, limit, offset);
  }

  private getTop<T>(
    type: TopType,
    timeRange: TimeRange,
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
