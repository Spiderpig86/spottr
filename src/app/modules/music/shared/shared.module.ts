import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from 'src/app/components/navbar/navbar.component';
import { ProfileButton } from 'src/app/components/profile-button/profile-button.component';
import { AppSharedModule } from '../../shared/shared.module';
import { DashboardTopArtistComponent } from '../dashboard/components/dashboard-top-artist/dashboard-top-artist.component';
import { TopTracksItemComponent } from '../top-tracks/components/top-tracks-item/top-tracks-item.component';
import { TimeRangeComponent } from './components/time-range/time-range.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [CommonModule, RouterModule, AppSharedModule],
  declarations: [
    ProfileButton,
    NavBarComponent,
    DashboardTopArtistComponent,
    TimeRangeComponent,
    TopTracksItemComponent,
  ],
  providers: [ProfileService],
  exports: [
    ProfileButton,
    NavBarComponent,
    DashboardTopArtistComponent,
    TimeRangeComponent,
    TopTracksItemComponent,
  ],
})
export class MusicSharedModule {}
