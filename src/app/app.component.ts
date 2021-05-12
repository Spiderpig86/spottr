import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from 'src/store';

import { AuthConstants } from './modules/auth/shared/services/auth.constants';
import { AuthService } from './modules/auth/shared/services/auth.service';
import { PlaylistsResponse } from './modules/music/shared/models/playlist.model';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div >
      <div class="h-screen w-full bg-black">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  auth$: Observable<string>;
  playlists$: Observable<PlaylistsResponse>;

  APP_NAME: string = `Spottr`;

  constructor(
    private store: Store,
    private auth: AuthService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.auth$ = this.store.select(AuthConstants.AUTH_KEY);
    this.title.setTitle(this.APP_NAME);
    this.meta.addTags([
      {name: 'keywords', content: 'spottr, spotify, music, spotify music, music charts, songs, tracks, artists, deezer, tidal, apple music, prime music'},
      {name: 'description', content: 'Spottr is the one place to view your Spotify stats year round.'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

  isLoggedIn() {
    return !!this.auth.authToken;
  }
}
