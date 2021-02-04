import { Component, Input } from '@angular/core';
import {
  Track,
  TrackAudioAnalysis,
  TrackFeatures,
} from '../../../shared/models/shared.model';

@Component({
  selector: 'track-details',
  styleUrls: ['./track-details.component.scss'],
  template: `
    <div *ngIf="track && trackFeatures && trackAnalysis">
      <p class="text-3xl font-bold">Basics</p>
      <div class="flex flex-wrap mb-8">
        <div class="mx-1 my-2">
          <track-card title="Album" [text]="track.album.name"></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Duration"
            [text]="track.duration_ms | timestamp"
          ></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card title="Popularity" [text]="track.popularity + '%'"></track-card>
        </div>
      </div>

      <p class="text-3xl font-bold">Musical Features</p>
      <div class="flex flex-wrap mb-8">
        <div class="mx-1 my-2">
          <track-card title="Key" [text]="trackFeatures.key | key"></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card title="Modality" [text]="trackFeatures.mode | modality"></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Time Signature"
            [text]="trackFeatures.time_signature"
          ></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card title="Tempo" [text]="trackFeatures.tempo"></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Bars"
            [text]="trackAnalysis.bars.length"
          ></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Beats"
            [text]="trackAnalysis.beats.length"
          ></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Sections"
            [text]="trackAnalysis.sections.length"
          ></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Segments"
            [text]="trackAnalysis.segments.length"
          ></track-card>
        </div>
      </div>
    </div>
  `,
})
export class TrackDetailsComponent {
  @Input() track: Track;
  @Input() trackFeatures: TrackFeatures;
  @Input() trackAnalysis: TrackAudioAnalysis;

  constructor() {}
}
