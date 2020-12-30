import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from 'src/store';

import { AuthConstants } from './modules/auth/shared/services/auth.constants';
import { AuthService } from './modules/auth/shared/services/auth.service';
import { User } from './modules/music/shared/models/user.model';
import { ProfileService } from './modules/music/shared/services/profile.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen w-full md:flex">
      <sidebar *ngIf="isLoggedIn()"></sidebar>
      <div class="w-full bg-black">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  auth$: Observable<string>;
  profile$: Observable<User>;

  constructor(
    private store: Store,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth$ = this.store.select(AuthConstants.AUTH_KEY);
  }

  isLoggedIn() {
    console.log(this.auth.authToken, 'bbbb');

    return !!this.auth.authToken;
  }
}
