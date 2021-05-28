import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import {
  PlaylistDetailsResponse,
  PlaylistTrack,
  PlaylistTracksResponse,
} from '../shared/models/playlist.model';
import { User } from '../shared/models/user.model';
import { PlaylistsService } from '../shared/services/playlists.service';
import { ProfileService } from '../shared/services/profile.service';

@Component({
  selector: 'playlist',
  styleUrls: ['./playlist.component.scss'],
  template: `
    <page [isDone]="(playlistDetails$ | async) && playlistTracks">
      <div class="md:flex">
        <div class="playlist__stats">
          <div class="image-container">
            <img [src]="(playlistDetails$ | async)?.images[0].url" />
          </div>
          <p class="text-2xl font-bold">
            <span class="title wrap">{{
              (playlistDetails$ | async)?.name
            }}</span>
          </p>
          <p class="text-m mb-4 text-gray-300">
            {{ (playlistDetails$ | async)?.tracks.total }} Tracks
          </p>

          <div class="my-4">
            <p class="text-m text-gray-300 font-normal break-words">
              {{ (playlistDetails$ | async)?.description }}
            </p>
            <p class="text-m text-gray-300 font-bold">
              By {{ (playlistDetails$ | async)?.owner.display_name }}
            </p>
          </div>

          <div class="my-4">
            <a [routerLink]="['/music/recommendations/', playlistId]">
              <spottr-button text="Similar Tracks"></spottr-button>
            </a>
          </div>
        </div>
        <div class="flex-grow">
          <playlist-view [playlistTracks]="playlistTracks"> </playlist-view>
        </div>
      </div>
    </page>
  `,
})
export class PlaylistComponent implements OnInit {
  playlistDetails$: Observable<PlaylistDetailsResponse>;
  user$: Observable<User>;
  playlistTracks: PlaylistTrack[] = [];
  nextUrl: string;
  playlistId: string;

  constructor(
    private route: ActivatedRoute,
    private playlistsService: PlaylistsService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        this.playlistId = params['id'];
        this.playlistDetails$ = this.playlistsService.getPlaylistDetails(
          this.playlistId
        );
        this.playlistTracks = [];
        this.playlistDetails$.subscribe((response) => {
          this.playlistTracks = this.playlistTracks.concat(
            response.tracks.items
          );
          this.nextUrl = response.tracks.next;
        });
      }
    });

    this.user$ = this.profileService.getProfile();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 20
    ) {
      if (this.nextUrl) {
        const next: Observable<PlaylistTracksResponse> = this.playlistsService.getPlaylistTracks(
          this.playlistId,
          100,
          this.playlistTracks.length
        );
        this.nextUrl = null;

        next.subscribe((response) => {
          this.playlistTracks = this.playlistTracks.concat(response.items);
          this.nextUrl = response.next;
        });
      }
    }
  }
}
