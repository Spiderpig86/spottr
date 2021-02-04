import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/shared/services/auth.service';
import { User } from 'src/app/modules/music/shared/models/user.model';

@Component({
  selector: 'nav-bar',
  template: `
    <div
      class="sticky top-0 z-50 bg-black bg-opacity-50 mx-auto flex align-middle justify-end"
      style="backdrop-filter: saturate(180%) blur(20px)"
    >
      <profile-button [user]="profile" (logout)="onLogout()"></profile-button>
    </div>
  `,
})
export class NavBarComponent {
  @Input() profile: User;
  constructor(private auth: AuthService) {}

  onLogout() {
    this.auth.logout();
  }
}
