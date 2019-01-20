import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { NavComponent } from '../nav/nav.component';
import { AppRoutingModule } from '../../app-routing.module';
import { TestComponent } from '../../pages/test/container/test.component';
import { SongCardComponent } from '../../pages/dashboard/components/song-card/song-card.component';
import { ArtistCardComponent } from '../../pages/dashboard/components/artist-card/artist-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  declarations: [
    DashboardComponent,
    NavComponent,
    SongCardComponent,
    ArtistCardComponent,
  ],
  exports: [
    NavComponent,
    SongCardComponent,
    ArtistCardComponent,
  ]
})
export class DashboardModule { }
