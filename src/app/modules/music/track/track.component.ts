import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { RecommendationsResponse } from '../shared/models/recommendations.model';
import {
  Track,
  TrackAudioAnalysis,
  TrackFeatures,
} from '../shared/models/shared.model';
import { User } from '../shared/models/user.model';
import { ProfileService } from '../shared/services/profile.service';
import { RecommendationsService } from '../shared/services/recommendations.service';
import { TracksService } from '../shared/services/tracks.service';

@Component({
  selector: 'track',
  styleUrls: ['./track.component.scss'],
  template: `
    <page [isDone]="(user$ | async) && (track$ | async) && (trackAnalysis$ | async) && (trackFeatures$ | async) && (similarTracks$ | async)">
      <track-summary [track]="track$ | async"></track-summary>
      <track-details
        [track]="track$ | async"
        [trackAnalysis]="trackAnalysis$ | async"
        [trackFeatures]="trackFeatures$ | async"
        [similarTracks]="similarTracks$ | async"
      ></track-details>
    </page>
  `,
})
export class TrackComponent implements OnInit {
  user$: Observable<User>;
  track$: Observable<Track>;
  trackAnalysis$: Observable<TrackAudioAnalysis>;
  trackFeatures$: Observable<TrackFeatures>;
  similarTracks$: Observable<RecommendationsResponse>;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private trackService: TracksService,
    private recommendationService: RecommendationsService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id']) {
        const trackId = params['id'] as string;
        this.track$ = this.trackService.getTrack(trackId);
        this.trackFeatures$ = this.trackService.getTrackFeatures(trackId);
        this.trackAnalysis$ = this.trackService.getTrackAnalysis(trackId);
        this.similarTracks$ = this.recommendationService.getRecommendations([trackId]);
      }
    });

    this.user$ = this.profileService.getProfile();
  }
}
