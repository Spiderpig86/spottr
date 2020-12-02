import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/store';
import { AuthService } from './modules/auth/shared/services/auth.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <p>App</p>
      <div>
        <router-outlet> </router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  constructor(
    private store: Store,
    private router: Router,
    private auth: AuthService
  ) {}
}
