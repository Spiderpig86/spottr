import { Component, Input, OnInit } from '@angular/core';
import { TopTrack } from '../../../shared/models/top.model';

@Component({
  selector: 'top-tracks-item',
  styleUrls: ['./top-tracks-item.component.scss'],
  template: `
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
        <div
          class="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm text-gray-600"
        >
          <p>{{ toTimestamp(topTrack.duration_ms) }}</p>
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

  toTimestamp(milliseconds: number): string {
    let seconds = Math.floor(milliseconds / 1000);
    let minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let hour = Math.floor(minute / 60);
    minute = minute % 60;

    let time = `${minute.toString()}:${seconds.toString().padStart(2, '0')}`;
    if (hour) {
      time = `${hour}:${time}`;
    }
    return time;
  }
}
