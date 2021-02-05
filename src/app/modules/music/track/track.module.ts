import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AppSharedModule } from '../../shared/shared.module';
import { TracksService } from '../shared/services/tracks.service';
import { MusicSharedModule } from '../shared/shared.module';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { TrackDetailsComponent } from './components/track-details/track-details.component';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';
import { TrackComponent } from './track.component';

export const TRACK_ROUTES: Routes = [
  {
    path: ':id',
    component: TrackComponent,
  },
  {
    // TODO: 404 Component
    path: '**',
    component: null,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TRACK_ROUTES),
    MusicSharedModule,
    AppSharedModule,
    ChartsModule
  ],
  declarations: [
    TrackComponent,
    TrackSummaryComponent,
    TrackDetailsComponent,
    TrackCardComponent,
  ],
  providers: [TracksService],
})
export class TrackModule {}
