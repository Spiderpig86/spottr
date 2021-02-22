import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationsResponse } from '../models/recommendations.model';
import { DEFAULT_CACHE_MINUTES, RECOMMENDATIONS_PLAYLIST_SIZE } from '../music.constants';
import { ENDPOINTS } from '../store/endpoint.store';
import { CachedHttpService } from './cached-http-client.service';

@Injectable()
export class RecommendationsService {
  constructor(private http: CachedHttpService) {}

  getRecommendations(
    seedTracks: string[] = [],
    artistSeeds: string[] = [],
    genreSeeds: string[] = [],
    playlistSize: number = RECOMMENDATIONS_PLAYLIST_SIZE
  ): Observable<RecommendationsResponse> {
    const endpoint = new URL(ENDPOINTS.get('recommendations'));
    endpoint.searchParams.append('seed_tracks', seedTracks.join(','));
    endpoint.searchParams.append('seed_artists', artistSeeds.join(','));
    endpoint.searchParams.append('seed_tracks', genreSeeds.join(','));
    endpoint.searchParams.append('limit', playlistSize.toString());

    return this.http.get({
      url: endpoint.toString(),
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }
}
