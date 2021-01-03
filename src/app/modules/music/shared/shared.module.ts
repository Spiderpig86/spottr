import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from 'src/app/components/navbar/navbar.component';
import { ProfileButton } from 'src/app/components/profile-button/profile-button.component';
import { DashboardTopArtistComponent } from '../dashboard/components/dashboard-top-artist/dashboard-top-artist.component';
import { TimeRangeComponent } from './components/time-range/time-range.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProfileButton,
    NavBarComponent,
    DashboardTopArtistComponent,
    TimeRangeComponent,
  ],
  providers: [ProfileService],
  exports: [
    ProfileButton,
    NavBarComponent,
    DashboardTopArtistComponent,
    TimeRangeComponent,
  ],
})
export class MusicSharedModule {}