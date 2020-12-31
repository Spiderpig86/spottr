import { NgModule } from '@angular/core';
import { NavBarComponent } from 'src/app/components/navbar/navbar.component';
import { ProfileButton } from 'src/app/components/profile-button/profile-button.component';
import { DashboardTopArtistComponent } from '../dashboard/components/dashboard-top-artist/dashboard-top-artist.component';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [],
  declarations: [ProfileButton, NavBarComponent, DashboardTopArtistComponent],
  providers: [ProfileService],
  exports: [ProfileButton, NavBarComponent, DashboardTopArtistComponent],
})
export class MusicSharedModule {}
