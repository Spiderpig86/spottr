import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { RecommendationsResponse } from '../../../shared/models/recommendations.model';

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
          <track-card
            title="Popularity"
            [text]="track.popularity + '%'"
          ></track-card>
        </div>
      </div>

      <p class="text-3xl font-bold">Musical Features</p>
      <div class="flex flex-wrap mb-8">
        <div class="mx-1 my-2">
          <track-card title="Key" [text]="trackFeatures.key | key"></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Modality"
            [text]="trackFeatures.mode | modality"
          ></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Time Signature"
            [text]="trackFeatures.time_signature"
          ></track-card>
        </div>
        <div class="mx-1 my-2">
          <track-card
            title="Tempo"
            [text]="(trackFeatures.tempo | number: '1.0-0') + ' BPM'"
          >
            <div
              class="pulse ml-8"
              [style]="'animation-duration: ' + trackTempoPulseDuration + 'ms'"
            ></div>
          </track-card>
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

      <div *ngIf="this.trackAudioFeatures && this.trackAnalysis" class="mb-8">
        <p class="text-3xl font-bold">Audio Features</p>
        <canvas
          baseChart
          [datasets]="this.trackAudioFeatures"
          [labels]="this.trackAudioFeatureLabels"
          [options]="barChartOptions"
          [plugins]="barChartPlugins"
          [legend]="barChartLegend"
          [chartType]="barChartType"
        >
        </canvas>
      </div>

      <div *ngIf="this.similarTracks">
        <p class="text-3xl font-bold my-2">Related Songs</p>
        <div *ngFor="let track of similarTracks.tracks">
          <top-tracks-item [topTrack]="track"></top-tracks-item>
        </div>
      </div>
    </div>
  `,
})
export class TrackDetailsComponent {
  @Input() track: Track;
  @Input() trackFeatures: TrackFeatures;
  @Input() trackAnalysis: TrackAudioAnalysis;
  @Input() similarTracks: RecommendationsResponse;

  trackAudioFeatureLabels: Label[] = [
    'Danceability',
    'Energy',
    'Speechiness',
    'Acousticness',
    'Instrumentalness',
    'Liveness',
    'Valence',
  ];
  trackAudioFeatures: ChartDataSets[];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = false;
  barChartPlugins = [];

  trackTempoPulseDuration: number = 1000;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.trackFeatures?.currentValue) {
      this.trackAudioFeatures = [
        {
          data: this.trackAudioFeatureLabels.map(
            (label) =>
              changes.trackFeatures.currentValue[label.toString().toLowerCase()]
          ),
          backgroundColor: [
            'rgb(202 178 214 / 0.8)',
            'rgb(138 147 187 / 0.8)',
            'rgb(166 206 227 / 0.8)',
            'rgb(178 223 138 / 0.8)',
            'rgb(255 255 153 / 0.8)',
            'rgb(253 191 111 / 0.8)',
            'rgb(251 154 153 / 0.8)',
          ],
          hoverBackgroundColor: [
            'rgb(202 178 214 / 1)',
            'rgb(138 147 187 / 1)',
            'rgb(166 206 227 / 1)',
            'rgb(178 223 138 / 1)',
            'rgb(255 255 153 / 1)',
            'rgb(253 191 111 / 1)',
            'rgb(251 154 153 / 1)',
          ],
        },
      ];

      this.trackTempoPulseDuration =
        (60 / changes.trackFeatures.currentValue.tempo) * 1000;
    }
  }
}
