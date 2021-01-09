import { Component, Input } from '@angular/core';
import { PlaylistDetailsResponse } from '../../../shared/models/playlist.model';

@Component({
  selector: 'playlist-view',
  styleUrls: ['./playlist-view.component.scss'],
  template: `
    <div *ngIf="playlistDetails" class="my-4">
      <top-tracks-item
        *ngFor="let track of playlistDetails.tracks.items"
        [topTrack]="track.track"
      ></top-tracks-item>
    </div>
  `,
})
export class PlaylistViewComponent {
  @Input() playlistDetails: PlaylistDetailsResponse;

  constructor() {}
}
