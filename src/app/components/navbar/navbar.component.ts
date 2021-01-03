import { Component, Input } from '@angular/core';
import { User } from 'src/app/modules/music/shared/models/user.model';

@Component({
  selector: 'nav-bar',
  template: `
    <div
      class="sticky top-0 bg-black bg-opacity-50 mx-auto flex align-middle justify-end"
      style="backdrop-filter: blur(5px)"
    >
      <profile-button [user]="profile"></profile-button>
    </div>
  `,
})
export class NavBarComponent {
  @Input() profile: User;
  constructor() {}
}