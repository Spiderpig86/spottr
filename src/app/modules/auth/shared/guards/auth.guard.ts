import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate() {
    return this.auth.auth$.pipe(
      map((token) => {
        if (!token) {
          this.router.navigate(['/auth/login']);
        }
        return !!token;
      })
    );
  }
}
