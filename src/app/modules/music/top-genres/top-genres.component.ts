import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopArtistsResponse } from '../shared/models/top.model';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';
import { TopService, TopTimeRange } from '../shared/services/top.service';
@Component({
  selector: 'top-genres',
  styleUrls: ['./top-genres.component.scss'],
  template: `
    <page>
      <p class="text-7xl mb-4 font-bold md:text-8xl">
        <span class="title">Top Genres</span>
      </p>
      <time-range
        [defaultTimeRange]="DEFAULT_TIME_RANGE"
        (valueChange)="setDateRange($event)"
      ></time-range>
      <top-genres-view
        *ngIf="topArtists$ | async as topArtists"
        [topArtists]="topArtists"
      ></top-genres-view>
    </page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopGenresComponent implements OnInit {
  topArtists$: Observable<TopArtistsResponse>;
  user$: Observable<User>;
  timeRange: TopTimeRange;

  DEFAULT_TIME_RANGE: TopTimeRange = TopTimeRange.LONG_TERM;

  constructor(
    private topService: TopService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.timeRange = this.DEFAULT_TIME_RANGE;
    this.topArtists$ = this.topService.getTopArtists(this.timeRange, 50);
    this.user$ = this.profileService.getProfile();
  }

  setDateRange(timeRange: TopTimeRange) {
    this.timeRange = timeRange;
    this.topArtists$ = this.topService.getTopArtists(timeRange, 50);
  }
}
