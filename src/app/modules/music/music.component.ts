import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaylistsResponse } from './shared/models/playlist.model';
import { PlaylistsService } from './shared/services/playlists.service';

@Component({
  selector: 'music',
  template: `
    <div class="min-h-screen w-full md:flex">
      <sidebar [playlists]="playlists$ | async"></sidebar>
      <div class="w-full bg-black">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class MusicComponent implements OnInit {
  playlists$: Observable<PlaylistsResponse>;

  constructor(private playlistService: PlaylistsService) {}

  ngOnInit() {
    this.playlists$ = this.playlistService.getPlaylists(50);
  }
}
