import { Component, Input } from '@angular/core';
import { Track } from '../../../shared/models/shared.model';

@Component({
  selector: 'track-summary',
  styleUrls: ['./track-summary.component.scss'],
  template: `
    <div>
      <div class="mb-8">
        <div
          class="text-center md:text-normal md:py-8 md:flex md:justify-between md:items-center"
        >
          <div class="mb-4 md:flex md:items-center">
            <img class="track-img" [src]="track?.album?.images[0].url" />
            <div class="ml-4 my-2 text-left">
              <p class="text-2xl md:text-6xl font-bold"> {{ track?.name }}</p>
              <a
                *ngFor="let artist of track?.artists"
                [routerLink]="['/music/artist/', artist.id]"
                class="text-lg text-gray-500 mr-1 hover:underline"
              >
                {{ artist.name }}
              </a>
            </div>
          </div>
          <div>
            <a [href]="track?.external_urls['spotify']">
              <spottr-button text="Open In Spotify"></spottr-button>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class TrackSummaryComponent {
  @Input() track: Track;

  constructor() {}
}
