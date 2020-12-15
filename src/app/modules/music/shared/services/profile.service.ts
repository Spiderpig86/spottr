import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
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
}
