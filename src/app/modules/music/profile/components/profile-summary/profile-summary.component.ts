import { Component, Input } from '@angular/core';
import { GetFollowingResponse, User } from '../../../shared/models/user.model';

@Component({
  selector: 'profile-summary',
  styleUrls: ['./profile-summary.component.scss'],
  template: `<div class="mb-8" *ngIf="user && getFollowingResponse">
    <div
      class="text-center md:text-normal md:py-8 md:flex md:justify-between md:items-center"
    >
      <div class="mb-4 md:flex md:items-center">
        <img class="track-img" [src]="user.images[0].url" />
        <div class="ml-6 my-2 text-left">
          <p class="text-2xl text-center font-bold md:text-left md:text-6xl">
            {{ user.display_name }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col px-8">
      <p class="text-9xl font-bold">Your Stats</p>
      <div>
        <p class="text-9xl font-bold">
          {{ user.followers.total }}
          <span class="text-gray-700 text-7xl">Followers</span>
        </p>
      </div>
      <div>
        <p class="text-9xl font-bold">
          {{ getFollowingResponse.artists.items.length }}
          <span class="text-gray-700 text-7xl">Following</span>
        </p>
      </div>
    </div>
    <!-- <div>
        <p class="uppercase tracking-wide font-light">Followers</p>
        <p>{{ user. }}</p>
      </div>
      <div>
        <p class="uppercase tracking-wide font-light">Followers</p>
        <p>{{ user.follwers }}</p>
      </div> -->
  </div> `,
})
export class ProfileSummaryComponent {
  @Input()
  user: User;
  @Input()
  getFollowingResponse: GetFollowingResponse;
  constructor() {}
}
