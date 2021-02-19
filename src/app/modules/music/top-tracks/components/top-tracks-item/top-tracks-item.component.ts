import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../../shared/models/shared.model';

@Component({
  selector: 'top-tracks-item',
  styleUrls: ['./top-tracks-item.component.scss'],
  template: `
    <a [routerLink]="['/music/track/', topTrack.id]">
      <div
        class="grid grid-span gap-4 items-center mb-2 p-4 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-gray-900"
      >
        <img class="w-16 h-16" [src]="topTrack.album?.images[0].url" />
        <div class="grid grid-stretch gap-4">
          <div class="overflow-hidden overflow-ellipsis whitespace-nowrap pr-1">
            <p class="hover:underline">{{ topTrack.name }}</p>
            <p
              class="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-500 font-normal"
            >
              {{ artists }} - {{ topTrack.album.name }}
            </p>
          </div>
          <div class="hidden overflow-hidden overflow-ellipsis whitespace-nowrap pr-1 lg:block">
            <progress-bar [percent]="topTrack.popularity"></progress-bar>
          </div>
          <div
            class="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-600"
          >
            <p>{{ topTrack.duration_ms | timestamp }}</p>
          </div>
        </div>
      </div>
    </a>
  `,
})
export class TopTracksItemComponent implements OnInit {
  artists: string;
  @Input() topTrack: Track;

  constructor() {}

  ngOnInit() {
    this.artists = this.topTrack.artists
      .map((artist) => artist.name)
      .join(', ');
  }
}
