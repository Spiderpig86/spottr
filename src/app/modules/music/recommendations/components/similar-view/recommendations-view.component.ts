import { Component, Input, OnInit } from '@angular/core';
import { PlaylistDetailsResponse } from '../../../shared/models/playlist.model';
import { RecommendationsResponse } from '../../../shared/models/recommendations.model';

@Component({
  selector: 'recommendations-view',
  template: `
    <div *ngIf="playlist && recommendedTracks" class="my-4">
      <p class="text-lg mb-8 md:text-3xl">Recommended playlist similar to '{{ playlist.name }}'</p>
      <div *ngFor="let track of recommendedTracks.tracks">
        <top-tracks-item
          [topTrack]="track"
        ></top-tracks-item>
      </div>
    </div>
  `,
})
export class RecommendationsViewComponent {
  @Input()
  playlist: PlaylistDetailsResponse;
  @Input()
  recommendedTracks: RecommendationsResponse;
}
