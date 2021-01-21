import { Component, Input } from '@angular/core';
import { TopTracksByArtistResponse } from '../../../shared/models/artists.model';

@Component({
  selector: 'artist-top-tracks',
  styleUrls: ['./artist-top-tracks.component.scss'],
  template: `
    <div class="my-8">
      <p class="text-3xl font-bold">Top Tracks</p>
      <div *ngIf="topTracks" class="my-4">
        <top-tracks-item
          *ngFor="let track of topTracks.tracks"
          [topTrack]="track"
        ></top-tracks-item>
      </div>
    </div>
  `,
})
export class ArtistTopTracksComponent {
  @Input() topTracks: TopTracksByArtistResponse;

  constructor() {}
}
