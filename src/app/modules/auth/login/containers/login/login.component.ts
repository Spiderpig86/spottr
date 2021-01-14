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
      <div class="splash__container w-full mx-8 z-10 sm:mx-24 xl:mx-auto">
        <p class="wow mb-3 text-5xl md:text-9xl tracking-tight md:mb-8">Spottr.</p>
        <p class="text-l leading-normal md:text-4xl md:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div class="flex my-8 md:my-12">
          <spottr-button
            text="Log In"
            extraClasses="mr-4 md:px-12 md:py-3"
            (click)="loginUser()"
          ></spottr-button>
          <spottr-button
            text="About"
            extraClasses="mr-4 md:px-12 md:py-3"
          ></spottr-button>
        </div>
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

        auth.setToken(res.access_token);
      });
  }

  ngOnInit() {
    if (this.auth.authToken) {
      console.trace(`Already logged in`, this.auth.authToken);
      this.router.navigate(['/music']);
      return;
    }
    this.scriptService.load('splash');
  }

  loginUser(): void {
    this.auth.login();
  }
}
