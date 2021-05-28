import { Component, Input } from '@angular/core';
import { PlaylistsResponse } from '../../../shared/models/playlist.model';
import { GetFollowingResponse, User } from '../../../shared/models/user.model';

@Component({
  selector: 'profile-summary',
  styleUrls: ['./profile-summary.component.scss'],
  template: `<div class="mb-8">
    <div
      class="text-center md:text-normal md:py-8 md:flex md:justify-between md:items-center"
    >
      <div class="mb-4 md:flex md:items-center">
        <img class="track-img" [src]="user.images[0].url" />
        <div class="my-2 text-left md:ml-6">
          <p class="text-2xl text-center font-bold md:text-left md:text-6xl">
            {{ user.display_name }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col px-8 text-center md:text-left">
      <div>
        <p class="text-4xl md:text-9xl font-bold">
          {{ user.followers.total }}
          <span class="text-gray-700 text-2xl md:text-7xl">Followers</span>
        </p>
      </div>
      <div>
        <p class="text-4xl md:text-9xl font-bold">
          {{ getFollowingResponse.artists.items.length }}
          <span class="text-gray-700 text-2xl md:text-7xl">Following</span>
        </p>
      </div>
      <div>
        <p class="text-4xl md:text-9xl font-bold">
          {{ playlistsResponse.items.length }}
          <span class="text-gray-700 text-2xl md:text-7xl">Playlists</span>
        </p>
      </div>
    </div>
  </div> `,
})
export class ProfileSummaryComponent {
  @Input()
  user: User;
  @Input()
  getFollowingResponse: GetFollowingResponse;
  @Input()
  playlistsResponse: PlaylistsResponse;
  constructor() {}
}
