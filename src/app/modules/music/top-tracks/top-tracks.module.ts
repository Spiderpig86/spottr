import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSharedModule } from '../shared/shared.module';
import { TopTracksViewComponent } from './components/top-tracks-view/top-tracks-view.component';
import { TopTracksComponent } from './top-tracks.component';

export const TOP_TRACKS_ROUTES: Routes = [
  {
    path: '',
    component: TopTracksComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MusicSharedModule,
    RouterModule.forChild(TOP_TRACKS_ROUTES),
  ],
  declarations: [
    TopTracksViewComponent,
    TopTracksComponent
  ],
  providers: [],
})
export class TopTracksModule {}
