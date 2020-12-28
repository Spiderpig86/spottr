import { Component, Input, OnInit } from '@angular/core';
import { TopTracksResponse } from '../../../shared/models/top.model';

@Component({
  selector: 'dashboard-top-tracks',
  styleUrls: ['./dashboard-top-tracks.component.scss'],
  template: `
    <div class="mb-8">
      <div class="flex justify-between">
        <p class="text-xl text-gray-500 font-semibold mb-4 tracking-tighter">
          Recent Top Tracks
        </p>
        <spottr-button text="See More"></spottr-button>
      </div>
      <div *ngIf="topTracks" class="sm:flex sm:flex-wrap">
        <dashboard-top-track
          *ngFor="let track of topTracks.items; index as i"
          [topTrack]="track"
        ></dashboard-top-track>
      </div>
    </div>
  `,
})
export class DashboardTopTracksComponent implements OnInit {
  @Input() topTracks: TopTracksResponse;

  constructor() {}

  ngOnInit() {}
}
