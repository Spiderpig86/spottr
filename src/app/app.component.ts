import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(
    private store: Store,
    private router: Router,
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.auth$ = this.store.select(AuthConstants.AUTH_KEY);
  }

  isLoggedIn() {
    return !!this.auth.authToken;
  }
}
