import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetFollowingResponse, User } from '../models/user.model';
import { DEFAULT_CACHE_MINUTES } from '../music.constants';
import { ENDPOINTS } from '../store/endpoint.store';
import { CachedHttpService } from './cached-http-client.service';

@Injectable()
export class ProfileService {
  constructor(private http: CachedHttpService) {}

  getProfile(): Observable<User> {
    const endpoint = ENDPOINTS.get('profile');
    return this.http.get({
      url: endpoint,
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }

  getFollowing(): Observable<GetFollowingResponse> {
    const endpoint = ENDPOINTS.get('profile_following');
    return this.http.get({
      url: endpoint,
      cacheMins: DEFAULT_CACHE_MINUTES,
    });
  }
}
