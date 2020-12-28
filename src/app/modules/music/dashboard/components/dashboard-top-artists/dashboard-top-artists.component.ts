import { Component, Input, OnInit } from '@angular/core';
import { TopArtistsResponse } from '../../../shared/models/top.model';

@Component({
  selector: 'dashboard-top-artists',
  styleUrls: ['./dashboard-top-artists.component.scss'],
  template: `
    <div class="mb-8">
      <p class="text-xl text-gray-500 font-semibold mb-4">Recent Top Artists</p>
      <div *ngIf="topArtists" class="md:flex">
        <dashboard-top-artist
          *ngFor="let artist of topArtists.items; index as i"
          [topArtist]="artist"
        ></dashboard-top-artist>
      </div>
    </div>
  `,
})
export class DashboardTopArtistsComponent implements OnInit {
  @Input() topArtists: TopArtistsResponse;

  constructor() {}

  ngOnInit() {}
}
