import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from 'src/store';
import { AuthConstants } from './modules/auth/shared/services/auth.constants';
import { AuthService } from './modules/auth/shared/services/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <p>App</p>
      <sidebar *ngIf="isLoggedIn()"></sidebar>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  auth$: Observable<string>;

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
