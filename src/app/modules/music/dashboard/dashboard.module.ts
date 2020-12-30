import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardTopArtistComponent } from './components/dashboard-top-artist/dashboard-top-artist.component';
import { DashboardTopArtistsComponent } from './components/dashboard-top-artists/dashboard-top-artists.component';
import { DashboardTopTrackComponent } from './components/dashboard-top-track/dashboard-top-track.component';
import { DashboardTopTracksComponent } from './components/dashboard-top-tracks/dashboard-top-tracks.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ProfileButton } from 'src/app/components/profile-button/profile-button.component';
import { NavBarComponent } from 'src/app/components/navbar/navbar.component';

export const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(DASHBOARD_ROUTES)],
  declarations: [
    DashboardComponent,
    DashboardTopArtistComponent,
    DashboardTopArtistsComponent,
    DashboardTopTrackComponent,
    DashboardTopTracksComponent,
    ButtonComponent,
    ProfileButton,
    NavBarComponent,
  ],
  providers: [],
})
export class DashboardModule {}
