import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardTopArtistComponent } from './components/dashboard-top-artist/dashboard-top-artist.component';
import { DashboardTopArtistsComponent } from './components/dashboard-top-artists/dashboard-top-artists.component';
import { DashboardTopTrackComponent } from './components/dashboard-top-track/dashboard-top-track.component';
import { DashboardTopTracksComponent } from './components/dashboard-top-tracks/dashboard-top-tracks.component';
import { MusicSharedModule } from '../shared/shared.module';
import { AppSharedModule } from '../../shared/shared.module';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
];
@NgModule({
  imports: [
    CommonModule,
    MusicSharedModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    AppSharedModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardTopArtistsComponent,
    DashboardTopTrackComponent,
    DashboardTopTracksComponent,
  ],
  providers: [],
})
export class DashboardModule {}
