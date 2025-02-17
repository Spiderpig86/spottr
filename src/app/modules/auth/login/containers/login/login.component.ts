import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ScriptService } from 'src/app/modules/shared/script.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    <div class="h-full flex items-center">
      <canvas
        id="splash"
        class="w-full h-full absolute z-0"
        width="32"
        height="32"
      ></canvas>
      <div
        class="splash__container w-full mx-8 z-10 sm:mx-12 md:mx-24 xl:mx-auto"
      >
        <div class="md:grid md:grid-cols-2 md:gap-12">
          <div class=" md:self-center">
            <p class="wow mb-3 text-7xl tracking-tight md:text-8xl md:mb-8">
              Spottr.
            </p>
            <div class="flex my-8 md:my-12">
              <spottr-button
                text="Launch App"
                extraClasses="splash__btn text-xs px-10 py-3 md:text-sm mr-4 md:px-12 md:py-4"
                (click)="loginUser()"
              ></spottr-button>
            </div>
          </div>
          <div>
            <p
              class="text-2xl leading-normal font-bold md:text-7xl lg:text-8xl"
            >
              Your <span class="stroke-font">Spotify</span> stats year-round.
            </p>
          </div>
        </div>
        <p class="text-xs mt-12 md:text-sm md:w-1/2">
          Spottr is not affiliated, associated, authorized, endorsed by, or in
          any way officially connected with © Spotify AB.
        </p>
      </div>
    </div>
  `,
})
export class LoginComponent implements OnInit {
  test: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private scriptService: ScriptService
  ) {
    // Check if store has token already
    if (this.route.snapshot.queryParamMap.has(`code`)) {
      // PKCE flow
      this.route.queryParams
      .pipe(
        map((queryParams) => new URLSearchParams(queryParams)),
        map((params) => ({
          code: params.get('code'),
          state: params.get('state'),
          error: params.get('error'),
        })),
        tap((res) => {
          auth.setPKCEAuthorizationCode(res.code);
        }))
        .subscribe(async (res) => {
          // Fetch auth token with authorization code
          if (!res.code || res.error) {
            console.error(`Spotify Auth server sync failed.`, res.code, res.error)
            return;
          }

          // Fetch token
          const authToken = await auth.fetchAuthToken();
          auth.setToken(authToken);
          this.redirectUserToMainPage();
        })
    } else {
      // Legacy flow
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
          if (!res.access_token) {
            return;
          }
          // TODO: Load user profile if possible to check if logged in?

          auth.setToken(res.access_token);
        });
    }
  }

  ngOnInit() {
    if (this.auth.authToken) {
      console.trace(`Already logged in`, this.auth.authToken);
      this.redirectUserToMainPage();
      return;
    }
    this.scriptService.load('splash');
  }

  loginUser(): void {
    this.auth.loginPKCE();
  }

  redirectUserToMainPage() {
    this.router.navigate(['/music']);
  }
}
