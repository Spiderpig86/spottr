import { Component } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'profile-summary',
  template: `<div class="mb-8">
    <div
      class="text-center md:text-normal md:py-8 md:flex md:justify-between md:items-center"
    >
      <div class="mb-4 md:flex md:items-center">
        <img class="track-img" [src]="user.images[0]" />
        <div class="ml-4 my-2 text-left">
          <p class="text-2xl text-center font-bold md:text-left md:text-6xl">
            {{ user.display_name }}
          </p>
        </div>
      </div>
    </div>
  </div> `,
})
export class ProfileSummaryComponent {
  user: User;
  constructor() {}
}
