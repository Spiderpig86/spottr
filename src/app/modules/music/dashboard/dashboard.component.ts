import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  TopArtistsResponse,
  TopTracksResponse,
} from '../shared/models/top.model';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';
import { TimeRange, TopService } from '../shared/services/top.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="p-8 bg-black text-white min-h-screen w-full">
      <p class="text-6xl font-bold pb-8 md:mt-16">Home</p>
      <!-- <button (click)="refresh()">Refresh</button> -->
      <!-- <p>{{ topArtists | async | json }}</p>
            <p>{{ topTracks | async | json }}</p> -->
      <dashboard-top-artists
        [topArtists]="topArtists$ | async"
      ></dashboard-top-artists>
      <p class="text-xl text-gray-500 font-semibold">Recent Top Songs</p>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  user$: Observable<User>;

  topArtists$: Observable<TopArtistsResponse>;
  topTracks$: Observable<TopTracksResponse>;

  constructor(
    private profileService: ProfileService,
    private topService: TopService
  ) {}

  ngOnInit() {
    this.user$ = this.profileService.getProfile();

    this.topArtists$ = this.topService.getTopArtists(TimeRange.SHORT_TERM, 5);
    this.topArtists$.subscribe((response) => {
      console.log('aaa', response);
    });

    // this.topTracks = this.topService.getTopTracks(TimeRange.LONG_TERM);
  }

  refresh() {
  }
}
