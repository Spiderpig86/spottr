import { Component, Input } from '@angular/core';
import { PlaylistDetailsResponse } from '../../../shared/models/playlist.model';

@Component({
  selector: 'playlist-view',
  styleUrls: ['./playlist-view.component.scss'],
  template: `
    <div *ngIf="playlistDetails" class="my-4">
      <div *ngFor="let track of playlistDetails.tracks.items">
        <top-tracks-item
          *ngIf="!track.is_local"
          [topTrack]="track.track"
        ></top-tracks-item>
      </div>
    </div>
  `,
})
export class PlaylistViewComponent {
  @Input() playlistDetails: PlaylistDetailsResponse;

  constructor() {}
}
