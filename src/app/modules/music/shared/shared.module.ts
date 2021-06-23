import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from 'src/app/components/navbar/navbar.component';
import { ProfileButton } from 'src/app/components/profile-button/profile-button.component';
import { AppSharedModule } from '../../shared/shared.module';
import { DashboardTopArtistComponent } from '../dashboard/components/dashboard-top-artist/dashboard-top-artist.component';
import { TopTracksItemComponent } from '../top-tracks/components/top-tracks-item/top-tracks-item.component';
import { TimeRangeComponent } from './components/time-range/time-range.component';
import { KeyPipe } from './pipes/key.pipe';
import { TimestampPipe } from './pipes/timestamp.pipe';
import { ModalityPipe } from './pipes/modality.pipe';
import { AvatarFallbackPipe } from './pipes/avatar-fallback.pipe';
import { ProfileService } from './services/profile.service';
import { PageComponent } from './components/page/page.component';
import { RecommendationsService } from './services/recommendations.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [CommonModule, RouterModule, AppSharedModule],
  declarations: [
    ProfileButton,
    NavBarComponent,
    DashboardTopArtistComponent,
    PageComponent,
    TimeRangeComponent,
    TopTracksItemComponent,
    SpinnerComponent,

    // Pipes
    TimestampPipe,
    KeyPipe,
    ModalityPipe,
    AvatarFallbackPipe,
  ],
  providers: [ProfileService, RecommendationsService],
  exports: [
    ProfileButton,
    NavBarComponent,
    DashboardTopArtistComponent,
    PageComponent,
    TimeRangeComponent,
    TopTracksItemComponent,
    SpinnerComponent,

    // Pipes
    TimestampPipe,
    KeyPipe,
    ModalityPipe,
    AvatarFallbackPipe,
  ],
})
export class MusicSharedModule {}
