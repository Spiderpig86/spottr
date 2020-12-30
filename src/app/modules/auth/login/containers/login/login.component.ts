import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  test: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
    // Check if store has token already
    console.log(auth.authToken);

    this.route.fragment
      .pipe(
        map((fragment) => new URLSearchParams(fragment)),
        map((params) => ({
          access_token: params.get('access_token'),
          id_token: params.get('id_token'),
          error: params.get('error'),
        })),
        tap((res) => {
          auth.setToken(res.access_token);
        })
      )
      .subscribe(async (res) => {
        console.log(res, 'aaaaa');

        if (!res.access_token) {
          return;
        }
        // TODO: Load user profile if possible to check if logged in?
        // const data = await auth.getProfile(res.access_token);

        auth.setToken(res.access_token);
      });
  }

  ngOnInit() {
    if (this.auth.authToken) {
      console.trace(`Already logged in`, this.auth.authToken);
      this.router.navigate(['/music']);
      return;
    }
  }

  loginUser(): void {
    this.auth.login();
  }
}
