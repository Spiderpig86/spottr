import { Component, Input, OnInit } from '@angular/core';
import { TopTrack } from '../../../shared/models/top.model';

@Component({
  selector: 'top-tracks-item',
  styleUrls: ['./top-tracks-item.component.scss'],
  template: `
    <div class="grid grid-span gap-4 items-center mb-8">
      <img class="w-16 h-16" [src]="topTrack.album?.images[0].url" />
      <div class="grid grid-stretch gap-4">
        <div class="overflow-hidden overflow-ellipsis whitespace-nowrap pr-1">
          <p>{{ topTrack.name }}</p>
          <p>{{ artists }} - {{ topTrack.album.name }}</p>
        </div>
        <div
          class="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-600"
        >
          <p>{{ topTrack.duration_ms }}</p>
        </div>
      </div>
    </div>
  `,
})
export class TopTracksItemComponent implements OnInit {
  artists: string;
  @Input() topTrack: TopTrack;

  constructor() {}

  ngOnInit() {
    this.artists = this.topTrack.artists
      .map((artist) => artist.name)
      .join(', ');
  }
}
