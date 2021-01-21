import { Component, Input } from '@angular/core';
import { RelatedArtistResponse } from '../../../shared/models/artists.model';

@Component({
  selector: 'artist-related',
  styleUrls: ['./artist-related.component.scss'],
  template: `
    <div class="my-8">
      <p class="text-3xl font-bold">Related Artists</p>
      <div *ngIf="relatedArtists" class="grid grid-cols-3 gap-4 my-4">
        <dashboard-top-artist
          *ngFor="let artist of relatedArtists.artists"
          [topArtist]="artist"
        ></dashboard-top-artist>
      </div>
    </div>
  `,
})
export class AritstRelatedComponent {
  @Input() relatedArtists: RelatedArtistResponse;

  constructor() {}
}
