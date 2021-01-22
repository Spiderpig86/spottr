import { Component, Input } from '@angular/core';
import { Artist } from '../../../shared/models/shared.model';

@Component({
  selector: 'artist-summary',
  styleUrls: ['./artist-summary.component.scss'],
  template: `
    <div class="mb-8">
      <div class="text-center md:text-normal md:py-8 md:flex md:justify-between md:items-center">
        <div class="mb-4 md:flex md:items-center">
          <img class="artist-img" [src]="artist?.images[0].url" />
          <p class="ml-4 my-2 text-2xl md:text-6xl font-bold">{{ artist?.name }}</p>
        </div>
        <div>
          <a [href]="artist?.external_urls['spotify']">
            <spottr-button text="Open In Spotify"></spottr-button>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-center py-4">
        <div>
          <p
            class="text-xl font-semibold text-gray-400 uppercase tracking-widest"
          >
            Genres
          </p>
          <ul>
            <li *ngFor="let genre of artist?.genres">{{ genre }}</li>
          </ul>
        </div>
        <div>
          <p
            class="text-xl font-semibold text-gray-400 uppercase tracking-widest"
          >
            Followers
          </p>
          <p class="text-lg text-gray-100">
            {{ artist?.followers.total | number }}
          </p>
        </div>
        <div>
          <p
            class="text-xl font-semibold text-gray-400 uppercase tracking-widest"
          >
            Popularity
          </p> 
          <p class="text-lg text-gray-100">{{ artist?.popularity }}%</p>
        </div>
      </div>
    </div>
  `,
})
export class ArtistSummaryComponent {
  @Input()
  artist: Artist;

  constructor() {}
}
