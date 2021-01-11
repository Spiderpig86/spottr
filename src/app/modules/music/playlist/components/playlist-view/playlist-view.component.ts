import { Component, Input } from '@angular/core';
import { PlaylistTrack } from '../../../shared/models/playlist.model';

@Component({
  selector: 'playlist-view',
  styleUrls: ['./playlist-view.component.scss'],
  template: `
    <div *ngIf="playlistTracks" class="my-4">
      <div *ngFor="let track of playlistTracks">
        <top-tracks-item
          *ngIf="!track.is_local"
          [topTrack]="track.track"
        ></top-tracks-item>
      </div>
    </div>
  `,
})
export class PlaylistViewComponent {
  @Input() playlistTracks: PlaylistTrack[];

  constructor() {}
}
