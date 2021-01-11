import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { PlaylistDetailsResponse } from '../shared/models/playlist.model';
import { User } from '../shared/models/user.model';
import { PlaylistsService } from '../shared/services/playlists.service';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'playlist',
  styleUrls: ['./playlist.component.scss'],
  template: `
    <div class="page">
      <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      <div class="md:flex">
        <div *ngIf="playlistDetails$" class="playlist__stats">
          <div class="image-container">
            <img [src]="(playlistDetails$ | async)?.images[0].url" />
          </div>
          <p class="text-4xl font-bold">
            <span class="title">{{ (playlistDetails$ | async)?.name }}</span>
          </p>
          <p class="text-m mb-4 text-gray-300">
            {{ (playlistDetails$ | async)?.tracks.total }} Tracks
          </p>

          <div class="my-4">
            <p class="text-m text-gray-300 font-normal">
              {{ (playlistDetails$ | async)?.description }}
            </p>
            <p class="text-m text-gray-300 font-bold">
              By {{ (playlistDetails$ | async)?.owner.display_name }}
            </p>
          </div>

          <div class="my-4">
            <spottr-button text="Similar Tracks"></spottr-button>
          </div>
        </div>
        <div class="flex-grow">
          <playlist-view
            *ngIf="playlistDetails$"
            [playlistDetails]="this.playlistDetails$ | async"
          >
          </playlist-view>
        </div>
      </div>
    </div>
  `,
})
export class PlaylistComponent implements OnInit {
  playlistDetails$: Observable<PlaylistDetailsResponse>;
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private playlistsService: PlaylistsService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        const playlistId = params['id'];
        this.playlistDetails$ = this.playlistsService.getPlaylistDetails(
          playlistId
        );
      }
    });

    this.user$ = this.profileService.getProfile();
  }
}
