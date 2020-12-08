import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'login',
  template: `
    <div>
      <p>Login 2 {{ test }} a</p>
      <button (click)="loginUser()">Login</button>
    </div>
  `,
})
export class LoginComponent {
  test: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    // Check if store has token already
    console.log(auth.authToken);

    if (auth.authToken) {
      console.trace(`Already logged in`, auth.authToken);
      return;
    }

    console.log(this.route.fragment);

    // Get token
    // this.route.fragment.subscribe(async (fragment) => {
    //   const fragments = fragment.split('&');

    //   const token = fragments[0].split('=')[1];

    //   // Load user profile if possible
    //   const data = await auth.getProfile(token);
    //   console.log(data);

    //   auth.setToken(token);
    // });
    this.route.fragment
      .pipe(
        map((fragment) => new URLSearchParams(fragment)),
        map((params) => ({
          access_token: params.get('access_token'),
          id_token: params.get('id_token'),
          error: params.get('error'),
        })),
        tap((res) => {
          console.log(res, 'cccc');

          auth.setToken(res.access_token);
        })
      )
      .subscribe(async (res) => {
        console.log(res, 'aaaaa');

        if (!res.access_token) {
          console.log('return');

          return;
        }
        // Load user profile if possible
        const data = await auth.getProfile(res.access_token);
        console.log(data);
        console.log('test');

        auth.setToken(res.access_token);
      });
  }

  loginUser(): void {
    this.auth.login();
  }
}
