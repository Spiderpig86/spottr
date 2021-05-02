import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/shared/services/auth.service';
import { User } from 'src/app/modules/music/shared/models/user.model';

@Component({
  selector: 'nav-bar',
  template: `
    <div
      class="spottr-nav-bar sticky top-0 z-50 bg-black bg-opacity-50 mx-auto flex align-middle justify-end"
      style="backdrop-filter: saturate(180%) blur(20px)"
    >
      <profile-button [user]="profile" (profile)="openProfile()" (logout)="onLogout()"></profile-button>
    </div>
  `,
})
export class NavBarComponent {
  @Input() profile: User;
  constructor(private auth: AuthService, private router: Router) {}

  openProfile() {
    this.router.navigate(['/music/profile']);
  }

  onLogout() {
    this.auth.logout();
  }
}
