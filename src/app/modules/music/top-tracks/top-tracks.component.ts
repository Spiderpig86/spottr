import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopTracksResponse } from '../shared/models/top.model';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';
import { TopService, TopTimeRange } from '../shared/services/top.service';

@Component({
  selector: 'top-tracks',
  styleUrls: ['./top-tracks.component.scss'],
  template: `
    <div class="page">
      <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      <p class="text-8xl mb-4 font-bold">
        <span class="title">Top Tracks</span>
      </p>
      <time-range
        [defaultTimeRange]="DEFAULT_TIME_RANGE"
        (valueChange)="setDateRange($event)"
      ></time-range>
      <top-tracks-view
        *ngIf="(topTracks$ | async) as topTracks"
        [topTracks]="topTracks"
      ></top-tracks-view>
    </div>
  `,
})
export class TopTracksComponent implements OnInit {
  topTracks$: Observable<TopTracksResponse>;
  user$: Observable<User>;
  timeRange: TopTimeRange;

  DEFAULT_TIME_RANGE: TopTimeRange = TopTimeRange.LONG_TERM;

  constructor(
    private topService: TopService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.timeRange = this.DEFAULT_TIME_RANGE;
    this.topTracks$ = this.topService.getTopTracks(TopTimeRange.LONG_TERM, 50);
    this.user$ = this.profileService.getProfile();
  }

  setDateRange(timeRange: TopTimeRange) {
    this.timeRange = timeRange;
    this.topTracks$ = this.topService.getTopTracks(timeRange, 50);
  }
}
