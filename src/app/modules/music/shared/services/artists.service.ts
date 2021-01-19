import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RelatedArtistResponse } from '../models/artists.model';
import { Artist } from '../models/shared.model';
import { DEFAULT_CACHE_MINUTES } from '../music.constants';
import { ENDPOINTS } from '../store/endpoint.store';
import { CachedHttpService } from './cached-http-client.service';

@Injectable()
export class ArtistService {
  constructor(private http: CachedHttpService) {}

  getArtist(artistId: string): Observable<Artist> {
    const endpoint = ENDPOINTS.get('artist') + artistId;
    return this.http.get({
      url: endpoint,
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }

  getRelatedArtists(artistId: string): Observable<RelatedArtistResponse> {
    const endpoint = ENDPOINTS.get('artist_related').replace('{id}', artistId);
    return this.http.get({
      url: endpoint,
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }
}
