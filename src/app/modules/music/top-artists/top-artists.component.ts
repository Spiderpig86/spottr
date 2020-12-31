import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/store';
import { TopArtist, TopArtistsResponse } from '../shared/models/top.model';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';
import { TopService, TopTimeRange } from '../shared/services/top.service';

@Component({
  selector: 'top-artists',
  styleUrls: ['./top-artists.component.scss'],
  template: `
    <div class="page">
      <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      <p class="text-8xl mb-4 font-bold">
        <span class="title">Top Artists</span>
      </p>
      <time-range
        [defaultTimeRange]="DEFAULT_TIME_RANGE"
        (valueChange)="setDateRange($event)"
      ></time-range>
      <top-artists-view
        *ngIf="topArtists$"
        [topArtists]="topArtists$ | async"
      ></top-artists-view>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopArtistsComponent implements OnInit {
  topArtists$: Observable<TopArtistsResponse>;
  user$: Observable<User>;
  timeRange: TopTimeRange;

  DEFAULT_TIME_RANGE: TopTimeRange = TopTimeRange.LONG_TERM;

  constructor(
    private topService: TopService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.timeRange = TopTimeRange.LONG_TERM;
    this.topArtists$ = this.topService.getTopArtists(
      TopTimeRange.LONG_TERM,
      50
    );
    this.user$ = this.profileService.getProfile();
  }

  setDateRange(timeRange: TopTimeRange) {
    this.timeRange = timeRange;
    this.topArtists$ = this.topService.getTopArtists(timeRange, 50);
  }
}
