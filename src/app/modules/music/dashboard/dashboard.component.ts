import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/store';

import {
  TopArtistsResponse,
  TopTracksResponse,
} from '../shared/models/top.model';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';
import { TopTimeRange, TopService } from '../shared/services/top.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="page">
      <nav-bar [profile]="user$ | async"></nav-bar>
      <p class="text-6xl font-bold pb-8 md:mt-8">Home</p>
      <div class="grid grid-cols-1 gap-12">
        <dashboard-top-artists
          [topArtists]="topArtists$ | async"
        ></dashboard-top-artists>
        <dashboard-top-tracks
          [topTracks]="topTracks$ | async"
        ></dashboard-top-tracks>
      </div>
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

    this.topArtists$ = this.topService.getTopArtists(
      TopTimeRange.SHORT_TERM,
      5
    );
    this.topTracks$ = this.topService.getTopTracks(TopTimeRange.SHORT_TERM, 5);
  }
}
