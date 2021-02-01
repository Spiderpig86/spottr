import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import {
  Track,
  TrackAudioAnalysis,
  TrackFeatures,
} from '../shared/models/shared.model';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';
import { TracksService } from '../shared/services/tracks.service';

@Component({
  selector: 'track',
  styleUrls: ['./track.component.scss'],
  template: `
    <div class="page">
      <nav-bar *ngIf="user$" [profile]="user$ | async"></nav-bar>
      <track-summary [track]="track$ | async"></track-summary>
      <track-details
        [track]="track$ | async"
        [trackAnalysis]="trackAnalysis$ | async"
        [trackFeatures]="trackFeatures$ | async"
      ></track-details>
    </div>
  `,
})
export class TrackComponent {
  user$: Observable<User>;
  track$: Observable<Track>;
  trackAnalysis$: Observable<TrackAudioAnalysis>;
  trackFeatures$: Observable<TrackFeatures>;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private trackService: TracksService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        const trackId = params['id'];
        this.track$ = this.trackService.getTrack(trackId);
        this.trackFeatures$ = this.trackService.getTrackFeatures(trackId);
        this.trackAnalysis$ = this.trackService.getTrackAnalysis(trackId);
      }
    });

    this.user$ = this.profileService.getProfile();
  }
}
